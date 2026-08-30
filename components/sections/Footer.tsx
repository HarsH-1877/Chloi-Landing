export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-white/15 font-mono text-[11px]">
              C
            </span>
            <span className="text-sm font-medium">Chloi</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-white/40">
            Privacy-first Mac menu-bar companion, powered by Gemini.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/45">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a
            href="https://github.com/ashp15205/Chloi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 font-mono text-[11px] text-white/25">
        © {new Date().getFullYear()} Chloi. Not affiliated with Google.
      </p>
    </footer>
  );
}
