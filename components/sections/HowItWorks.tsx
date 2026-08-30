"use client";

import { FadeIn } from "../FadeIn";

const steps = [
  {
    n: "01",
    title: "Hit the hotkey",
    body: "Cmd+Option+Space starts a duplex voice session. Cmd+Option+Shift+Space drag-selects a region.",
    mock: (
      <div className="flex h-24 items-center justify-center gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>Space</Kbd>
      </div>
    ),
  },
  {
    n: "02",
    title: "Chloi sees & listens",
    body: "The trust pill switches to Listening. Chloi reads the screen — or just the region you selected.",
    mock: (
      <div className="flex h-24 items-center justify-center">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-board-amber" />
          <span className="font-mono text-[11px] text-white/80">Listening...</span>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "Get instant visual + spoken answers",
    body: "Overlays appear on the UI. Chloi talks. Or the background agent runs locally and reports back.",
    mock: (
      <div className="flex h-24 items-center justify-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-board-blue font-mono text-[11px] text-board-blue">
          2
        </span>
        <span className="h-px w-8 bg-board-blue/70" />
        <span className="rounded border border-board-blue/60 px-2 py-1 font-mono text-[10px] text-white/60">
          live-session.js
        </span>
      </div>
    ),
  },
];

function Kbd({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-1 font-mono text-[12px] text-white/80">
      {children}
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-white md:text-4xl">
            Trigger. Perceive. Act.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.07}>
              <article className="h-full rounded-2xl border border-white/10 bg-ink-card p-5">
                <div className="rounded-lg border border-white/10 bg-[#0C0D11]">
                  {step.mock}
                </div>
                <p className="mt-4 font-mono text-[11px] text-accent">{step.n}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {step.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
