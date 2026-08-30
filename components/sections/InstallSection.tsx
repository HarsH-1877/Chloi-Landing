"use client";

import { FadeIn } from "../FadeIn";

export function InstallSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Getting started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-white md:text-4xl">
              From zero to menu bar in seconds.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0C0D11] shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-black/40">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="mx-auto flex h-6 items-center rounded-md border border-white/10 bg-white/[0.04] px-4">
                <span className="font-mono text-[10px] text-white/40">
                  bash — ~
                </span>
              </div>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed text-white/70 sm:p-6 sm:text-sm sm:leading-loose">
              <p>
                <span className="text-accent mr-2">❯</span>
                <span className="text-white">git clone https://github.com/ashp15205/Chloi.git</span>
              </p>
              <p>
                <span className="text-accent mr-2">❯</span>
                <span className="text-white">cd Chloi</span>
              </p>
              <p>
                <span className="text-accent mr-2">❯</span>
                <span className="text-white">npm install</span>
              </p>
              <p className="mt-4 mb-2 text-white/40">
                # Build the Swift overlay and run
              </p>
              <p>
                <span className="text-accent mr-2">❯</span>
                <span className="text-white">npm start</span>
              </p>
              <p className="mt-4 text-board-green">
                [Smartboard] Menu bar companion initialized.
              </p>
              <p className="text-board-green">
                [Listening] Cmd+Option+Space to interact.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
