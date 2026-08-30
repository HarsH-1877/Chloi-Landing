"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "../FadeIn";

const features = [
  {
    id: "smartboard",
    label: "Screen Smartboard",
    kicker: "Visual overlays",
    title: "Draws on your actual screen",
    body: "Color-coded bounding boxes, numbered callout badges with leader lines, a persistent HUD for multi-step explanations, and geometric highlights. Markup auto-clears on app switch, click, or after a short pause.",
    preview: <SmartboardPreview />,
  },
  {
    id: "agent",
    label: "Autonomous Agent",
    kicker: "Background researcher",
    title: "Say “Chloi agent,” then walk away",
    body: "Spawns an async researcher that can browse the web, run bash locally, read files and configs, and drive Mail, Calendar, and Finder via AppleScript. Results are announced verbally when done.",
    preview: <AgentPreview />,
  },
  {
    id: "trust",
    label: "Trust Indicator",
    kicker: "Always visible",
    title: "You always know when it is listening",
    body: "A floating pill in the menu bar shows Idle, Listening, Processing, or Speaking. No covert listening, ever.",
    preview: <TrustPreview />,
  },
  {
    id: "voice",
    label: "Duplex Voice",
    kicker: "Cmd+Option+Space",
    title: "Interruptible, real-time conversation",
    body: "Start and stop a voice session with a hotkey. Talk over Chloi naturally — the session is duplex, not a walkie-talkie.",
    preview: <VoicePreview />,
  },
  {
    id: "region",
    label: "Region Query",
    kicker: "Cmd+Option+Shift+Space",
    title: "Point Chloi at a slice of the screen",
    body: "Drag-select any region to focus attention there. Ask what is happening on the right side of an image, or highlight a single panel.",
    preview: <RegionPreview />,
  },
  {
    id: "captions",
    label: "Live Captions",
    kicker: "On-screen subtitles",
    title: "The conversation, written as it happens",
    body: "Real-time captions sit at the bottom of the screen so you can follow spoken answers without leaving your current window.",
    preview: <CaptionsPreview />,
  },
];

export function FeatureExplorer() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active) ?? features[0];

  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tighter text-white md:text-4xl">
            Six mechanics. No filler tiles.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {features.map((feature) => {
                const selected = feature.id === active;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onMouseEnter={() => setActive(feature.id)}
                    onFocus={() => setActive(feature.id)}
                    onClick={() => setActive(feature.id)}
                    className={`relative shrink-0 rounded-lg px-3 py-2.5 text-left transition ${
                      selected
                        ? "text-white"
                        : "text-white/45 hover:text-white/75"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="feature-tab"
                        className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.04]"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10 block text-sm font-medium">
                      {feature.label}
                    </span>
                    <span className="relative z-10 mt-0.5 hidden font-mono text-[10px] text-white/35 lg:block">
                      {feature.kicker}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="border-b border-white/10 px-5 py-4 md:px-6">
                    <p className="font-mono text-[11px] text-accent">{current.kicker}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                      {current.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
                      {current.body}
                    </p>
                  </div>
                  <div className="p-4 md:p-6">{current.preview}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0C0D11]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[10px] text-white/35">{label}</span>
      </div>
      <div className="relative min-h-[220px] p-4">{children}</div>
    </div>
  );
}

function SmartboardPreview() {
  return (
    <Frame label="overlay.swift · annotate">
      <div className="grid h-[200px] grid-cols-3 gap-2">
        {["#E05B5B", "#5B8DE0", "#5BE07F"].map((c, i) => (
          <div
            key={c}
            className="relative rounded border bg-white/[0.02] p-2"
            style={{ borderColor: `${c}99` }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full border font-mono text-[10px] text-white"
              style={{ borderColor: c }}
            >
              {i + 1}
            </span>
            <p className="mt-6 font-mono text-[10px] text-white/40">
              region_{i + 1}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function AgentPreview() {
  return (
    <Frame label="zsh · chloi agent">
      <pre className="font-mono text-[12px] leading-6 text-white/60">
        <span className="text-white/30">$</span> Chloi agent, find the top 3 React
        {"\n"}  state management libraries and summarize them.
        {"\n"}
        <span className="text-board-amber">[~] browsing…</span>
        {"\n"}
        <span className="text-white/30">$</span> bash: git log --oneline -5
        {"\n"}
        <span className="text-board-green">[done]</span> announcing results verbally
      </pre>
    </Frame>
  );
}

function TrustPreview() {
  const states = [
    { label: "Idle", color: "bg-white/30" },
    { label: "Listening", color: "bg-board-amber" },
    { label: "Processing", color: "bg-accent" },
    { label: "Speaking", color: "bg-board-green" },
  ];
  return (
    <Frame label="menu bar">
      <div className="flex h-[200px] flex-col items-center justify-center gap-4">
        {states.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1 ${
              i === 1 ? "scale-105" : "opacity-50"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
            <span className="font-mono text-[11px] text-white/80">{s.label}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function VoicePreview() {
  return (
    <Frame label="duplex session">
      <div className="flex h-[200px] flex-col justify-between">
        <p className="font-mono text-[11px] text-white/40">
          hotkey · Cmd+Option+Space
        </p>
        <div className="flex items-end gap-1 px-2">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 rounded-sm bg-accent/80"
              style={{ height: `${10 + ((i * 17) % 48)}px` }}
            />
          ))}
        </div>
        <p className="text-sm text-white/55">
          Talk over Chloi. The session stays open until you hit the hotkey again.
        </p>
      </div>
    </Frame>
  );
}

function RegionPreview() {
  return (
    <Frame label="region query">
      <div className="relative h-[200px] rounded-md bg-white/[0.03]">
        <div className="absolute inset-8 rounded border border-dashed border-white/70 bg-white/[0.04]" />
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/45">
          drag-select · Cmd+Opt+Shift+Space
        </p>
      </div>
    </Frame>
  );
}

function CaptionsPreview() {
  return (
    <Frame label="captions">
      <div className="flex h-[200px] items-end justify-center pb-4">
        <div className="max-w-md rounded-lg border border-white/10 bg-black/75 px-4 py-2 text-center text-sm text-white/85">
          Highlight the syntax errors in this code and explain them.
        </div>
      </div>
    </Frame>
  );
}
