"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const badges = ["Native macOS", "Powered by Gemini", "Privacy-first"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(47,107,255,0.22),transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-left pt-6 md:pt-10"
          >
            <div className="mb-6 border-l-2 border-white/20 pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                <span className="mr-2 text-accent/80">{">"}</span>
                Desktop assistant · menu bar native
              </p>
            </div>

            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-[54px]">
              <span className="block mb-4 text-[64px] font-black tracking-tighter text-white sm:text-[80px] md:text-[96px] lg:text-[112px]">
                Chloi<span className="text-accent">.</span>
              </span>
              The AI assistant that actually <span className="font-bold text-white">assists.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              Chloi lives in your Mac menu bar, listens when you talk, and draws
              directly on your screen to guide you — powered by Gemini.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-start gap-3">
              {/* TODO: link to release */}
              <a
                href="#"
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-accent-bright"
              >
                Download for Mac
              </a>
              <a
                href="https://github.com/ashp15205/Chloi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                View on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/50"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="relative w-full lg:absolute lg:top-10 lg:-right-[15%] lg:w-[130%] z-10">
              <HeroVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-ink-card p-3 shadow-2xl md:p-4">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0C0D11]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="absolute left-1/2 top-2 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-board-amber opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-board-amber" />
              </span>
              <span className="font-mono text-[11px] text-white/80">
                Listening...
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] text-white/30">live-session.js</span>
        </div>

        <div className="grid min-h-[280px] grid-cols-[88px_1fr] md:min-h-[340px] md:grid-cols-[140px_1fr_180px]">
          <div className="relative border-r border-white/10 p-3 font-mono text-[10px] leading-5 text-white/35">
            <div className="absolute inset-2 rounded border border-board-red/70" />
            <p className="relative text-white/50">assistant/</p>
            <p className="relative pl-2">Chloi/</p>
            <p className="relative pl-4 text-white/70">live-session.js</p>
            <p className="relative pl-4">overlay.swift</p>
            <p className="relative pl-4">.env</p>
          </div>

          <div className="relative border-r border-white/10 p-4 font-mono text-[11px] leading-6 text-white/55">
            <div className="absolute inset-3 rounded border border-board-blue/70" />
            <p>
              <span className="text-board-blue">const</span> voiceConfig = {"{"}
            </p>
            <p className="pl-4">
              hotkey:{" "}
              <span className="text-board-amber">&quot;Cmd+Opt+Space&quot;</span>
            </p>
            <p className="pl-4">
              duplex: <span className="text-board-green">true</span>
            </p>
            <p>{"}"}</p>
            <p className="mt-3">
              <span className="text-board-blue">tools</span>.annotate_screen()
            </p>
          </div>

          <div className="relative hidden p-3 md:block">
            <div className="absolute inset-2 rounded border border-board-amber/70" />
            <p className="font-mono text-[10px] text-white/40">HUD · steps</p>
            <ol className="mt-2 space-y-1.5 font-mono text-[10px] text-white/55">
              <li>1. File explorer</li>
              <li>2. Editor region</li>
              <li>3. Terminal logs</li>
            </ol>
          </div>
        </div>

        <Callout
          color="border-board-red text-board-red"
          n="1"
          className="absolute left-[4%] top-[38%] hidden max-w-[180px] sm:block"
          title="File Explorer"
          body="Project tree on the left."
        />
        <Callout
          color="border-board-blue text-board-blue"
          n="2"
          className="absolute right-[28%] top-[28%] hidden max-w-[200px] md:block"
          title="Code Editor"
          body="live-session.js — tools & voiceConfig."
        />
      </div>
    </div>
  );
}

function Callout({
  n,
  title,
  body,
  color,
  className,
}: {
  n: string;
  title: string;
  body: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border bg-black/80 px-2.5 py-2 backdrop-blur ${color} ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px] font-mono">
          {n}
        </span>
        <span className="text-[11px] font-medium text-white">{title}</span>
      </div>
      <p className="mt-1 text-[10px] leading-snug text-white/50">{body}</p>
    </div>
  );
}
