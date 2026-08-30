"use client";

import { FadeIn } from "../FadeIn";

const facts = [
  {
    k: "2",
    label: "hotkeys",
    detail: "Cmd+Opt+Space to talk. Cmd+Opt+Shift+Space to region-query.",
  },
  {
    k: "Local",
    label: "first",
    detail: "The background agent runs bash, files, and AppleScript on your Mac.",
  },
  {
    k: "Auto",
    label: "clears",
    detail: "Annotations vanish on app switch, click, or after a short pause.",
  },
  {
    k: "Your",
    label: "key",
    detail: "Gemini API key from AI Studio, stored locally. Never sent to us.",
  },
];

export function StatStrip() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <FadeIn key={fact.label} delay={i * 0.05}>
              <article className="rounded-2xl border border-white/10 bg-ink-card px-5 py-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
                  {fact.label}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tighter text-white tabular">
                  {fact.k}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {fact.detail}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
