"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "https://github.com/ashp15205/Chloi", label: "GitHub", external: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-white/15 bg-white/[0.04] font-mono text-[11px] font-medium text-white">
            C
          </span>
          <span className="text-[15px] font-medium tracking-tight">Chloi</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="text-[13px] text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* TODO: link to release */}
        <a
          href="#"
          className="rounded-lg bg-accent px-3 py-1.5 text-[13px] font-medium text-white transition hover:bg-accent-bright"
        >
          Download for Mac
        </a>
      </div>
    </motion.header>
  );
}
