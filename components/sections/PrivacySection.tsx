"use client";

import { FadeIn } from "../FadeIn";
import { HardDrive, KeyRound, Layers } from "lucide-react";

const columns = [
  {
    icon: HardDrive,
    title: "Local-first",
    body: "The background agent browses, runs bash, reads local files, and drives native Mac apps on your machine.",
    chips: ["bash", "AppleScript", "Finder / Mail / Calendar"],
  },
  {
    icon: KeyRound,
    title: "Your API key, your control",
    body: "Bring a Gemini key from Google AI Studio. It is stored locally — never sent to a third party by Chloi.",
    chips: ["Google AI Studio", "Stored on disk", "No telemetry"],
  },
  {
    icon: Layers,
    title: "Native macOS overlay",
    body: "Visual markup is a Swift-built overlay layer, not a web wrapper. Menu-bar native from the first pixel.",
    chips: ["Swift overlay", "Menu-bar native"],
  },
];

export function PrivacySection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Runs on your Mac
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tighter text-white md:text-4xl">
            Privacy is the architecture, not a footnote.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-card p-6">
                <col.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {col.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/45">
                  {col.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {col.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/45"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
