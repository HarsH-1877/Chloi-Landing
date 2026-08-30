"use client";

import { FadeIn } from "../FadeIn";

export function SmartboardShowcase() {
  return (
    <section className="relative py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Screen Smartboard
              </p>
              <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tighter text-white md:text-4xl">
                Labels every region. Not a generic highlight.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Swift-built native overlay. Numbered badges, leader lines, and
              color-coded boxes — then nothing lingers after you click or
              switch apps.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12 space-y-12">
          {/* 1. Code Editor */}
          <div>
            <div className="mb-4 font-mono text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-2">
              <span className="text-accent">01.</span> IDE & Debugging
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-2 md:p-3">
              <EditorMock />
            </div>
          </div>

          {/* 2. Research Paper */}
          <div>
            <div className="mb-4 font-mono text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-2">
              <span className="text-accent">02.</span> Academic Research
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-2 md:p-3">
              <ResearchMock />
            </div>
          </div>

          {/* 3. Autonomous Tasks */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-4 font-mono text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-2">
                <span className="text-accent">03.</span> Background Agent
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-2 md:p-3">
                <AutonomousMock />
              </div>
            </div>

            {/* 4. Native OS Control */}
            <div>
              <div className="mb-4 font-mono text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-2">
                <span className="text-accent">04.</span> Native macOS Apps
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-card p-2 md:p-3">
                <NativeAppMock />
              </div>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-[11px] text-white/30">
            Stylized recreations of live Chloi sessions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function EditorMock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0C10]">
      <div className="flex items-center border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-board-amber" />
          <span className="font-mono text-[11px] text-white/80">Listening...</span>
        </div>
      </div>

      <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)_200px] md:grid-rows-[1fr_140px]">
        <div className="relative border-b border-white/10 p-3 md:border-b-0 md:border-r md:row-span-2">
          <div className="absolute inset-2 rounded border border-board-red/80" />
          <p className="relative font-mono text-[10px] text-white/35">EXPLORER</p>
          <ul className="relative mt-3 space-y-1 font-mono text-[11px] text-white/45">
            <li>assistant/</li>
            <li className="pl-3 text-white/70">Chloi/</li>
            <li className="pl-6 text-white">live-session.js</li>
            <li className="pl-6">overlay.swift</li>
            <li className="pl-6">package.json</li>
            <li className="pl-6">.env</li>
          </ul>
          <CalloutCard
            n="1"
            color="board-red"
            title="File Explorer"
            body="The sidebar on the left displays the project file structure, allowing you to navigate through the 'Chloi' source code and configuration files."
            className="absolute -right-2 top-16 z-10 hidden w-[190px] md:block"
          />
        </div>

        <div className="relative border-b border-white/10 p-4">
          <div className="absolute inset-2 rounded border border-board-blue/80" />
          <p className="relative mb-3 font-mono text-[10px] text-white/30">
            live-session.js
          </p>
          <pre className="relative font-mono text-[11px] leading-6 text-white/55">
            <span className="text-white/25"> 12 </span>
            <span className="text-[#C586C0]">const</span> tools = {"["}
            {"\n"}
            <span className="text-white/25"> 13 </span>
            {"  "}annotate_screen,{"\n"}
            <span className="text-white/25"> 14 </span>
            {"  "}region_query,{"\n"}
            <span className="text-white/25"> 15 </span>
            {"];"}
            {"\n"}
            <span className="text-white/25"> 16 </span>
            <span className="text-[#C586C0]">const</span> voiceConfig = {"{"}
            {"\n"}
            <span className="text-white/25"> 17 </span>
            {"  "}duplex: <span className="text-board-green">true</span>,{"\n"}
            <span className="text-white/25"> 18 </span>
            {"}"}
          </pre>
          <CalloutCard
            n="2"
            color="board-blue"
            title="Code Editor"
            body="The central panel is the code editor, currently showing 'live-session.js' where you are defining 'tools' and 'voiceConfig' for the application."
            className="absolute right-6 top-8 z-10 hidden w-[210px] lg:block"
          />
        </div>

        <div className="relative hidden border-l border-white/10 p-3 md:row-span-2 md:block">
          <div className="absolute inset-2 rounded border border-board-amber/80" />
          <p className="relative font-mono text-[10px] text-white/35">
            Building Privacy Focused AI
          </p>
          <p className="relative mt-3 font-mono text-[10px] leading-5 text-white/40">
            Native overlay. Local Gemini key. Menu-bar companion.
          </p>
          <div className="relative mt-8 rounded border border-white/10 bg-black/40 px-2 py-1.5 font-mono text-[10px] text-white/30">
            Ask Chloi…
          </div>
          <CalloutCard
            n="4"
            color="board-amber"
            title="AI Chat Panel"
            body="The right-hand panel is an AI assistant interface, currently showing a 'Building Privacy Focused AI' conversation and a prompt input field."
            className="absolute -left-8 bottom-16 z-10 w-[210px]"
          />
        </div>

        <div className="relative p-3">
          <div className="absolute inset-2 rounded border border-board-green/80" />
          <p className="relative font-mono text-[10px] text-white/35">TERMINAL</p>
          <pre className="relative mt-2 overflow-hidden font-mono text-[10px] leading-5 text-white/45">
            $ npm start{"\n"}
            Starting session (model: gemini-flash){"\n"}
            <span className="text-board-green">[Smartboard] annotate_screen</span>
            {"\n"}
            {"{ regions: 4, overlay: native }"}
          </pre>
          <CalloutCard
            n="3"
            color="board-green"
            title="Terminal Output"
            body="The bottom panel shows the terminal output, indicating that the 'npm start' command was executed and the session started successfully."
            className="absolute right-8 top-4 z-10 hidden w-[200px] lg:block"
          />
        </div>
      </div>

      <p className="py-2 text-center font-mono text-[10px] text-board-red/80">
        (Left click to vanish)
      </p>
    </div>
  );
}

function CalloutCard({
  n,
  title,
  body,
  color,
  className,
}: {
  n: string;
  title: string;
  body: string;
  color: "board-red" | "board-blue" | "board-green" | "board-amber";
  className?: string;
}) {
  const map = {
    "board-red": "border-board-red text-board-red",
    "board-blue": "border-board-blue text-board-blue",
    "board-green": "border-board-green text-board-green",
    "board-amber": "border-board-amber text-board-amber",
  };
  return (
    <div
      className={`rounded-lg border bg-black/85 px-2.5 py-2 shadow-lg backdrop-blur ${map[color]} ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current font-mono text-[10px]">
          {n}
        </span>
        <span className="text-[11px] font-medium text-white">{title}</span>
      </div>
      <p className="mt-1 text-[10px] leading-snug text-white/50">{body}</p>
    </div>
  );
}

function ResearchMock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#FAF9F6]">
      <div className="flex items-center justify-between border-b border-black/10 px-3 py-2 bg-[#EBEBEB]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-[10px] text-black/50">attention_is_all_you_need.pdf</span>
        <div className="w-10"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] min-h-[300px]">
        <div className="p-6 md:p-8 text-black relative">
           <div className="absolute inset-4 rounded border-2 border-board-blue/80 bg-board-blue/5" />
           <h2 className="text-xl font-bold font-serif text-center mb-6">Attention Is All You Need</h2>
           <div className="columns-2 gap-8 text-[9.5px] leading-relaxed text-black/80 font-serif">
             <p className="mb-4">The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism.</p>
             <p className="mb-4">We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.</p>
           </div>
           
           <CalloutCard
            n="1"
            color="board-blue"
            title="PDF Abstract"
            body="Chloi reads the currently visible text on screen, understanding multi-column layouts."
            className="absolute left-[15%] top-1/2 z-10 hidden sm:block w-[200px]"
          />
        </div>
        
        <div className="border-l border-black/10 bg-[#1A1C23] p-4 text-white relative flex flex-col justify-center">
           <div className="absolute inset-2 rounded border border-board-amber/80" />
           <p className="relative font-mono text-[10px] text-white/50 mb-3">Chloi Insights</p>
           <p className="relative text-[11px] leading-relaxed text-white/80">
             The abstract is introducing the <strong>Transformer</strong> model. It replaces older recurrent/CNN architectures with pure attention mechanisms.
           </p>
           
           <CalloutCard
            n="2"
            color="board-amber"
            title="Contextual Sidebar"
            body="Explains complex academic jargon in real-time as you read."
            className="absolute -left-12 bottom-8 z-10 w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

function AutonomousMock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0C10]">
      <div className="flex items-center border-b border-white/10 px-3 py-2 bg-[#1C1C1E]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="mx-auto font-mono text-[10px] text-white/50">Terminal — bash</span>
      </div>
      
      <div className="p-5 font-mono text-[11px] leading-loose text-white/70 min-h-[250px] relative">
        <div className="absolute inset-2 rounded border border-board-green/80" />
        <p className="relative"><span className="text-accent">~ %</span> Chloi agent, fix my git conflicts</p>
        <p className="relative text-white/40 mt-2">[Agent] Reading git status...</p>
        <p className="relative text-white/40">[Agent] Found conflict in package.json</p>
        <p className="relative text-white/40">[Agent] Resolving versions to accept incoming changes...</p>
        <p className="relative text-board-green mt-2">✔ Conflict resolved. Ready to commit.</p>
        
        <CalloutCard
            n="3"
            color="board-green"
            title="Local Execution"
            body="The background agent runs bash commands directly on your machine to automate tasks."
            className="absolute right-[5%] bottom-[10%] z-10 w-[240px]"
          />
      </div>
    </div>
  );
}

function NativeAppMock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1C1C1E]">
      <div className="flex items-center border-b border-white/10 px-3 py-2 bg-[#2C2C2E]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="mx-auto text-[11px] font-medium text-white/70">Calendar</span>
      </div>
      
      <div className="p-4 grid grid-cols-[60px_1fr] gap-4 min-h-[250px] relative text-white">
        <div className="absolute inset-2 rounded border border-board-red/80" />
        <div className="relative text-[10px] text-white/50 text-right space-y-12 pt-4">
          <p>9 AM</p>
          <p>10 AM</p>
          <p>11 AM</p>
        </div>
        <div className="relative border-l border-white/10">
           <div className="absolute top-4 left-0 right-4 h-16 bg-[#007AFF]/20 border-l-4 border-[#007AFF] p-2 text-xs">
             <p className="font-semibold text-white">Sync with Engineering</p>
             <p className="text-[10px] text-white/70 mt-1">Google Meet</p>
           </div>
           
           <CalloutCard
            n="4"
            color="board-red"
            title="AppleScript Control"
            body="Chloi can read your schedule or draft events natively inside macOS apps."
            className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 w-[220px]"
          />
        </div>
      </div>
    </div>
  );
}
