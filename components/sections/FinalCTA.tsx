"use client";

import { FadeIn } from "../FadeIn";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent-muted px-6 py-14 text-center md:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.22),transparent_65%)]" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tighter text-white md:text-5xl">
                Bring Chloi to your menu bar.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
                npm install, build the Swift overlay, paste your Gemini key, npm
                start. Or ship a .dmg with npm run build.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {/* TODO: link to release */}
                <a
                  href="#"
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-bright"
                >
                  Download for Mac
                </a>
                <a
                  href="https://github.com/ashp15205/Chloi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:text-white"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              {/* TODO: confirm Apple Silicon vs Intel / macOS version before publishing */}
              <p className="mt-4 font-mono text-[11px] text-white/35">
                macOS · Apple Silicon & Intel
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
