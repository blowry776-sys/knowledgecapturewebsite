const Arrow = () => <span aria-hidden="true">↗</span>;

const Logo = () => (
  <span className="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 32 32" role="img">
      <path className="frame-path" d="M3 11V3h8M21 3h8v8M29 21v8h-8M11 29H3v-8" />
      <path className="flow-path" d="M8 20h4v-8h4v12h4V9h4" />
    </svg>
  </span>
);

const ProcessDiagram = () => (
  <svg className="process-diagram" viewBox="0 0 1120 430" role="img" aria-labelledby="process-title process-desc">
    <title id="process-title">From manufacturing task to operational knowledge</title>
    <desc id="process-desc">A manufacturing station is recorded using a camera or smart glasses. The recording is structured on a tablet and becomes an SOP, time study and training record.</desc>
    <defs>
      <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity=".08"/></pattern>
    </defs>
    <rect width="1120" height="430" className="diagram-bg" />
    <rect width="1120" height="430" fill="url(#grid)" className="diagram-grid" />

    <g className="station-icon" transform="translate(55 92)">
      <rect x="0" y="128" width="270" height="30" rx="3" />
      <circle cx="28" cy="174" r="14"/><circle cx="88" cy="174" r="14"/><circle cx="148" cy="174" r="14"/><circle cx="208" cy="174" r="14"/>
      <path d="M92 126V62h82v64M112 62V25h42v37M121 25V4h24v21" />
      <rect className="part" x="181" y="93" width="50" height="34" rx="4" />
      <path className="tool" d="M158 53l42 40M149 44l18 18" />
      <text x="0" y="221">MANUFACTURING TASK</text>
    </g>

    <g className="capture-icons" transform="translate(385 76)">
      <g className="camera-icon"><rect x="0" y="55" width="92" height="62" rx="7"/><circle cx="46" cy="86" r="20"/><path d="M24 55l10-15h24l10 15M46 117v35M18 152h56"/><text x="0" y="190">CAMERA</text></g>
      <g className="glasses-icon" transform="translate(0 212)"><path d="M0 38l10-28h30l8 28M92 38L82 10H52l-8 28M40 21h12"/><rect x="6" y="22" width="37" height="27" rx="10"/><rect x="49" y="22" width="37" height="27" rx="10"/><circle className="lens" cx="78" cy="29" r="4"/><text x="0" y="78">SMART GLASSES</text></g>
    </g>

    <g className="data-path">
      <path className="capture-branch" d="M325 206h25v-44h35M350 206v117h35" />
      <path d="M477 162h43c18 0 30 12 30 30v14h20M477 323h43c18 0 30-12 30-30v-73c0-8 7-14 20-14" />
      <circle r="5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M325 206h25v-44h35" /></circle>
      <circle r="5"><animateMotion begin="1.1s" dur="3.2s" repeatCount="indefinite" path="M325 206h25v117h35" /></circle>
      <circle r="5"><animateMotion begin=".65s" dur="3.2s" repeatCount="indefinite" path="M477 162h43c18 0 30 12 30 30v14h20" /></circle>
      <circle r="5"><animateMotion begin="1.75s" dur="3.2s" repeatCount="indefinite" path="M477 323h43c18 0 30-12 30-30v-73c0-8 7-14 20-14" /></circle>
      <text className="capture-label" x="337" y="145">CAPTURED BY</text>
    </g>

    <g className="tablet-icon" transform="translate(570 66)">
      <rect x="0" y="0" width="210" height="280" rx="14"/><rect className="screen" x="18" y="20" width="174" height="232" rx="5"/>
      <path d="M40 61h94M40 82h126M40 103h76"/><rect className="step-block" x="40" y="137" width="34" height="34" rx="3"/><rect className="step-block" x="84" y="137" width="34" height="34" rx="3"/><rect className="step-active" x="128" y="137" width="38" height="34" rx="3"/><path d="M40 202h126M40 222h82"/>
      <text x="105" y="322" textAnchor="middle">STRUCTURED KNOWLEDGE</text>
    </g>

    <g className="output-path"><path d="M800 206h46M846 206v-116h24M846 206h24M846 206v116h24"/><circle r="5"><animateMotion begin=".8s" dur="4s" repeatCount="indefinite" path="M800 206h46V90h24" /></circle><circle r="5"><animateMotion begin="1.7s" dur="4s" repeatCount="indefinite" path="M800 206h70" /></circle><circle r="5"><animateMotion begin="2.6s" dur="4s" repeatCount="indefinite" path="M800 206h46v116h24" /></circle></g>

    <g className="output-icons" transform="translate(878 41)">
      <g><rect width="188" height="92" rx="6"/><path d="M22 24h54M22 42h108M22 59h87"/><text x="22" y="80">SOP / WORK INSTRUCTION</text></g>
      <g transform="translate(0 119)"><rect width="188" height="92" rx="6"/><circle cx="47" cy="42" r="24"/><path d="M47 42V26M47 42l12 9M39 13h16"/><text x="83" y="39">OBSERVED</text><text x="83" y="56">TIME STUDY</text></g>
      <g transform="translate(0 238)"><rect width="188" height="92" rx="6"/><circle cx="42" cy="34" r="13"/><path d="M20 68c3-18 12-25 22-25s19 7 22 25M94 28h63M94 47h48M94 66h57"/><path className="tick" d="M145 46l7 7 16-18"/><text x="22" y="82">TRAINING &amp; ASSURANCE</text></g>
    </g>
  </svg>
);

const services = [
  { n: "01", title: "Knowledge capture", lead: "Video or transcription → SOP", text: "Record an experienced operator doing the job or talking through the process. Convert that knowledge into a structured SOP or work instruction, including the steps, tools, checks and decisions required." },
  { n: "02", title: "Time studies", lead: "Video → process timings", text: "Analyse recorded work step by step. Establish observed cycle times, identify waiting, repetition and variation, and create a reliable baseline for improving the process." },
  { n: "03", title: "Training", lead: "Process knowledge → workforce capability", text: "Turn the approved process into clear training content. Assign it to the right people and maintain a record of who has watched, understood or demonstrated the task." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Knowledge Capture home"><Logo /><span>Knowledge<span>Capture</span></span></a>
        <div className="nav-links"><a href="#problem">The problem</a><a href="#services">What it does</a><a href="#outcomes">Outcomes</a><a className="button small" href="#pilot">Request a pilot <Arrow /></a></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">Knowledge capture · Time studies · Training</div>
        <h1>Turn video into<br/><em>operational knowledge.</em></h1>
        <p className="hero-copy">Record a task once. Turn the video or transcription into an SOP, a time study and training your workforce can actually use.</p>
        <div className="hero-actions"><a className="button" href="#pilot">Explore a pilot <Arrow /></a><a className="text-link" href="#services">See what it produces <span>↓</span></a></div>
        <div className="industrial-flow" aria-label="A manufacturing task captured by camera and smart glasses, then converted into operational outputs">
          <div className="scene-window"><ProcessDiagram /></div>
          <div className="flow-caption"><span>CAPTURE THE WORK</span><i /><span>STRUCTURE THE KNOWLEDGE</span><i /><span>USE IT ON THE FLOOR</span></div>
          <div className="output-strip"><div><b>01</b><span>SOP / work instruction</span></div><div><b>02</b><span>Observed time study</span></div><div><b>03</b><span>Training &amp; assurance</span></div></div>
        </div>
      </section>

      <section className="problem" id="problem"><div className="shell two-col"><p className="section-label">THE OPERATIONAL PROBLEM</p><div><h2>The people who know the process rarely have time to document it.</h2><p>Critical knowledge sits with experienced operators. SOPs become outdated because writing them is slow. Time studies require someone to stand with a stopwatch. Training varies depending on who is available to deliver it.</p><p>When someone leaves, changes role or is unavailable, the organisation loses more than a person. It loses the detail of how the work really gets done.</p><div className="problem-points"><span>Slow, manual documentation</span><span>Inconsistent processes and training</span><span>No reliable baseline for improvement</span><span>Operational knowledge at risk</span></div></div></div></section>

      <section className="how shell" id="services">
        <div className="section-head"><div><p className="section-label">THREE CONNECTED CAPABILITIES</p><h2>Capture once.<br/>Use it three ways.</h2></div><p>Use an ordinary camera, phone or smart glasses. The value comes from converting the recording into practical outputs—not from asking your team to learn another complicated system.</p></div>
        <div className="steps service-steps">{services.map((service) => <article key={service.n}><span>{service.n}</span><h3>{service.title}</h3><strong>{service.lead}</strong><p>{service.text}</p></article>)}</div>
      </section>

      <section className="outcomes" id="outcomes"><div className="shell">
        <p className="section-label light">THE OPERATIONAL OUTCOME</p>
        <div className="outcome-grid"><div><h2>Keep the knowledge. Improve the work. Prove the capability.</h2><p>Knowledge Capture gives the organisation a repeatable way to preserve expertise, understand performance and train people against the same approved process.</p></div><div className="outcome-list">
          {[["01", "Knowledge that stays", "Preserve the practical detail held by experienced people before it walks out the door."],["02", "SOPs grounded in real work", "Create usable instructions from what actually happens, then keep them aligned as the process changes."],["03", "Evidence for improvement", "Use observed timings and process data to find bottlenecks, waste, variation and training needs."],["04", "A workforce you can stand over", "Know who has received the right instruction and who is ready to perform the task."]].map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div></div>
      </div></section>

      <section className="pilot shell" id="pilot"><div className="pilot-card"><p className="section-label">PILOT PROGRAMME</p><h2>Give us one process. See what your video can become.</h2><p>Select a real operational task. We capture it with your team, then produce the SOP or work instruction, an observed time study and a clear training output. You leave with useful operational assets—and a practical view of where the approach could scale.</p><a className="button dark" href="mailto:hello@knowledgecapture.app?subject=Knowledge%20Capture%20pilot">Discuss a pilot <Arrow /></a><small>Early access · UK &amp; Ireland</small></div></section>

      <footer className="shell"><div className="brand"><Logo /><span>Knowledge<span>Capture</span></span></div><p>Operational knowledge, captured.</p><small>Knowledge Capture is a product of The Startup System Ltd. © 2026</small></footer>
    </main>
  );
}
