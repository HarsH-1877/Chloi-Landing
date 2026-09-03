terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ---------- SSH Key Generation ----------

resource "tls_private_key" "ssh" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "chloi_key" {
  key_name   = var.key_name
  public_key = tls_private_key.ssh.public_key_openssh
}

resource "local_file" "ssh_private_key" {
  content         = tls_private_key.ssh.private_key_pem
  filename        = "${path.module}/../ansible/chloi-key.pem"
  file_permission = "0400"
}

# ---------- Variables ----------

variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "Name of an existing EC2 Key Pair for SSH access"
  type        = string
}

variable "allowed_ssh_cidr" {
  description = "CIDR block allowed to SSH (set to your IP/32 for safety)"
  type        = string
  default     = "0.0.0.0/0"
}

# ---------- Data sources ----------

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# ---------- Networking ----------

resource "aws_security_group" "chloi_sg" {
  name        = "chloi-landing-sg"
  description = "Allow HTTP, HTTPS, and SSH"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ssh_cidr]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "chloi-landing" }
}

# ---------- EC2 Instance ----------

resource "aws_instance" "chloi" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = aws_key_pair.chloi_key.key_name
  vpc_security_group_ids = [aws_security_group.chloi_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              set -e
              apt-get update -y
              apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release git
              
              # Install Docker
              install -m 0755 -d /etc/apt/keyrings
              curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
              chmod a+r /etc/apt/keyrings/docker.asc
              echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
              
              apt-get update -y
              apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
              systemctl enable --now docker
              usermod -aG docker ubuntu

              # Clone repo and launch Docker container
              mkdir -p /opt/chloi
              git clone https://github.com/HarsH-1877/Chloi-Landing.git /opt/chloi
              cd /opt/chloi
              docker build -t chloi-landing:latest .
              docker run -d --name chloi-landing --restart unless-stopped -p 80:3000 chloi-landing:latest
              EOF

  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }

  tags = {
    Name    = "chloi-landing"
    Project = "chloi"
  }
}

# ---------- Elastic IP ----------

resource "aws_eip" "chloi" {
  instance = aws_instance.chloi.id
  domain   = "vpc"

  tags = { Name = "chloi-landing" }
}

# ---------- Ansible Inventory Auto-Generation ----------

resource "local_file" "ansible_inventory" {
  content = <<-EOT
[chloi]
${aws_eip.chloi.public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=${path.module}/../ansible/chloi-key.pem
EOT
  filename = "${path.module}/../ansible/inventory.ini"
}

# ---------- Outputs ----------

output "public_ip" {
  description = "Public IP of the Chloi landing server"
  value       = aws_eip.chloi.public_ip
}

output "ssh_command" {
  description = "SSH command to connect"
  value       = "ssh -i ${path.module}/../ansible/chloi-key.pem ubuntu@${aws_eip.chloi.public_ip}"
}
