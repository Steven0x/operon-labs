// Business automation architecture:
// data sources -> Operon orchestration engine -> business systems,
// with a governance strip (approval / audit / monitoring) + feedback loop.
// Pure SVG + CSS (classes in globals.css). No JS, no deps.
export default function FlowDiagram() {
  const sources = [
    { y: 56, label: "Email & inbox" },
    { y: 104, label: "Slack & chat" },
    { y: 152, label: "Web forms" },
    { y: 200, label: "Docs & files" },
  ];
  const systems = [
    { y: 56, label: "CRM" },
    { y: 104, label: "Helpdesk" },
    { y: 152, label: "Billing & ops" },
    { y: 200, label: "Dashboards" },
  ];
  const engineLeft = 190, engineRight = 410, engineMidY = 152;

  return (
    <div className="flow-wrap" aria-label="Diagram: your data sources feed an Operon AI orchestration engine that updates your business systems, governed by human approval, audit logs, and monitoring.">
      <div className="flow-cap">How Operon fits in</div>
      <svg className="flow-svg" viewBox="0 0 600 372" xmlns="http://www.w3.org/2000/svg" role="img">
        {/* column headers */}
        <text className="flow-hdr" x="71" y="34" textAnchor="middle">Your data</text>
        <text className="flow-hdr" x="300" y="34" textAnchor="middle">Operon AI layer</text>
        <text className="flow-hdr" x="529" y="34" textAnchor="middle">Your systems</text>

        {/* connectors in */}
        {sources.map((s, i) => (
          <path key={`li${i}`} className="flow-line" d={`M134 ${s.y + 19} C 165 ${s.y + 19}, 165 ${engineMidY}, ${engineLeft} ${engineMidY}`} />
        ))}
        {/* connectors out */}
        {systems.map((s, i) => (
          <path key={`lo${i}`} className="flow-line" d={`M${engineRight} ${engineMidY} C 440 ${engineMidY}, 440 ${s.y + 19}, 466 ${s.y + 19}`} />
        ))}
        {/* animated flow */}
        {sources.map((s, i) => (
          <path key={`di${i}`} className="flow-dash" style={{ animationDelay: `${i * 0.3}s` }} d={`M134 ${s.y + 19} C 165 ${s.y + 19}, 165 ${engineMidY}, ${engineLeft} ${engineMidY}`} />
        ))}
        {systems.map((s, i) => (
          <path key={`do${i}`} className="flow-dash" style={{ animationDelay: `${i * 0.3 + 0.4}s` }} d={`M${engineRight} ${engineMidY} C 440 ${engineMidY}, 440 ${s.y + 19}, 466 ${s.y + 19}`} />
        ))}

        {/* source chips */}
        {sources.map((s, i) => (
          <g key={`s${i}`}>
            <rect className="flow-node" x="8" y={s.y} width="126" height="38" rx="10" />
            <circle className="flow-dot" cx="26" cy={s.y + 19} r="3.5" />
            <text className="flow-t" x="38" y={s.y + 23}>{s.label}</text>
          </g>
        ))}

        {/* orchestration engine */}
        <rect className="flow-engine" x={engineLeft} y="50" width="220" height="204" rx="16" />
        <text className="flow-engine-label" x="300" y="72" textAnchor="middle">orchestration engine</text>
        <ellipse className="flow-ring-el" cx="300" cy="152" rx="96" ry="26" />
        {[
          { y: 84, label: "Triage & route", hot: false },
          { y: 134, label: "AI agents", hot: true },
          { y: 184, label: "Knowledge + tools", hot: false },
        ].map((p, i) => (
          <g key={`p${i}`}>
            <rect className={p.hot ? "flow-pill-hot" : "flow-pill"} x="204" y={p.y} width="192" height="36" rx="9" />
            <text className="flow-pt" x="300" y={p.y + 23} textAnchor="middle">{p.label}</text>
          </g>
        ))}

        {/* system chips */}
        {systems.map((s, i) => (
          <g key={`sy${i}`}>
            <rect className="flow-node" x="466" y={s.y} width="126" height="38" rx="10" />
            <text className="flow-t" x="482" y={s.y + 23}>{s.label}</text>
          </g>
        ))}

        {/* feedback loop */}
        <path className="flow-fb" d="M300 254 L 300 286" />
        <text className="flow-fb-t" x="310" y="274">learns &amp; improves</text>

        {/* governance strip */}
        <rect className="flow-gov" x="8" y="292" width="584" height="46" rx="12" />
        <line x1="203" y1="302" x2="203" y2="328" stroke="var(--line)" strokeWidth="1" />
        <line x1="397" y1="302" x2="397" y2="328" stroke="var(--line)" strokeWidth="1" />
        <text className="flow-gov-t" x="105" y="319" textAnchor="middle">✓ Human approval</text>
        <text className="flow-gov-t" x="300" y="319" textAnchor="middle">◨ Audit log</text>
        <text className="flow-gov-t" x="495" y="319" textAnchor="middle">◉ Monitoring</text>
      </svg>
    </div>
  );
}
