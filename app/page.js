import FlowDiagram from "./components/FlowDiagram";

// ============================================================
//  EDIT ME — all copy & links live here. Change and redeploy.
// ============================================================
const CONFIG = {
  brand: "Operon Labs",
  bookingUrl: "https://calendly.com/operonlabs/30min",
  email: "stevennakhwal@gmail.com",

  hero: {
    eyebrow: "AI automation studio",
    lead: "We design and build custom AI agents that quietly handle your team's repetitive work — the follow-ups, data entry, routing, and reporting — so you move faster without adding headcount.",
    primaryCta: "Book a free automation audit",
    note: "A free 30-minute call. We'll map one workflow you could automate this month — and you'll leave with a plan, whether or not we work together.",
  },

  trustline: "Built on the tools you already run on",
  tools: ["Slack", "HubSpot", "Notion", "Gmail", "Airtable", "Zapier"],

  services: [
    { n: "i", title: "Custom AI agents", desc: "Agents that read, decide, and act across your tools — triaging tickets, chasing leads, pulling research, moving data between systems." },
    { n: "ii", title: "Workflow automation", desc: "Your apps wired together end to end, so leads, tickets, and hand-offs move themselves — no more copy-paste between tabs." },
    { n: "iii", title: "Inbox & ops", desc: "Draft replies, route requests, summarize long threads, and update your CRM the moment something lands." },
    { n: "iv", title: "Reporting & insight", desc: "Automated summaries and dashboards that turn scattered data into a clear picture your team will actually read." },
    { n: "v", title: "Internal tools", desc: "Lightweight, AI-powered tools shaped around your exact process — not another platform to bend your team around." },
    { n: "vi", title: "Fractional AI partner", desc: "An ongoing partner to spot, build, and maintain your highest-leverage automations as the business grows." },
  ],

  steps: [
    { n: "1", title: "Audit", desc: "We find the one workflow quietly costing your team the most hours every week." },
    { n: "2", title: "Build", desc: "We design and ship it in days — and you watch it run on your real data before it ever goes live." },
    { n: "3", title: "Save", desc: "It runs in the background from then on. You get the hours back; we keep it tuned as things change." },
  ],

  stats: [
    { big: "10–20 hrs", lbl: "saved every week, per workflow" },
    { big: "In days", lbl: "from first call to live automation" },
    { big: "Zero", lbl: "extra headcount to scale it" },
  ],

  faqs: [
    { q: "What kind of businesses do you work with?", a: "Small teams and growing companies buried in repetitive manual work — agencies, ops and support teams, professional services, and founders wearing too many hats." },
    { q: "Do I need a technical team?", a: "No. We handle the building and the upkeep. You point us at the painful workflow and review the result — that's it." },
    { q: "How much does it cost?", a: "Most projects are fixed-scope and start in the low four figures, with optional monthly support. You'll get a clear number on the first call, before you commit to anything." },
    { q: "What happens after it's built?", a: "It's yours, running on your accounts. We monitor it, fix anything that breaks, and tune it as your tools and processes change — so it keeps working without you thinking about it." },
    { q: "Is my data safe?", a: "Yes. We build on top of your existing tools and accounts, follow least-access principles, and never train models on your private data." },
  ],
};
// ============================================================

export default function Home() {
  const book = { href: CONFIG.bookingUrl, target: "_blank", rel: "noopener noreferrer" };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">O</span>
            <span className="brand-name">{CONFIG.brand}</span>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-primary" {...book}>Book a call <span className="btn-arrow">→</span></a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow-row"><span className="eyebrow-dot" /><span className="eyebrow">{CONFIG.hero.eyebrow}</span></span>
              <h1>The busywork in your business, <span className="italic-clay">handled by AI.</span></h1>
              <p className="lead">{CONFIG.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" {...book}>{CONFIG.hero.primaryCta} <span className="btn-arrow">→</span></a>
                <a className="btn btn-ghost" href="#services">See what we build</a>
              </div>
              <p className="hero-note">{CONFIG.hero.note}</p>
            </div>
            <FlowDiagram />
          </div>
        </section>

        {/* TRUST */}
        <section className="container" style={{ paddingBottom: 44 }}>
          <p style={{ textAlign: "center", color: "var(--ink-faint)", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
            {CONFIG.trustline}
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
            {CONFIG.tools.map((tool) => (
              <span key={tool} className="serif" style={{ color: "var(--ink-soft)", fontSize: 20 }}>{tool}</span>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-line" id="services">
          <div className="container">
            <div className="section-head">
              <span className="kicker">What we do</span>
              <h2>Automation built around your workflow, not the other way around.</h2>
              <p className="sub">We don't hand you software to figure out. We find the repetitive work eating your team's time and build the AI that does it — then we keep it running.</p>
            </div>
            <div className="svc-grid">
              {CONFIG.services.map((s) => (
                <div className="svc" key={s.title}>
                  <div className="num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section-line" id="how">
          <div className="container">
            <div className="section-head">
              <span className="kicker">How it works</span>
              <h2>From a painful workflow to a live automation in days, not quarters.</h2>
            </div>
            <div className="steps">
              {CONFIG.steps.map((step) => (
                <div className="step" key={step.n}>
                  <div className="snum">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="stats">
              {CONFIG.stats.map((st) => (
                <div className="stat" key={st.lbl}>
                  <div className="big">{st.big}</div>
                  <div className="lbl">{st.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-band">
              <h2>See what you could automate <span className="em">this month.</span></h2>
              <p>Book a free 30-minute audit. We'll pinpoint one high-leverage workflow you can hand to AI — and you'll walk away with a concrete plan, whether or not we work together.</p>
              <a className="btn btn-on-dark" {...book}>{CONFIG.hero.primaryCta} <span className="btn-arrow">→</span></a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-line" id="faq">
          <div className="container">
            <div className="section-head">
              <span className="kicker">FAQ</span>
              <h2>Questions, answered.</h2>
            </div>
            <div className="faq">
              {CONFIG.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" style={{ width: 28, height: 28, fontSize: 16 }}>O</span>
            <span className="brand-name" style={{ fontSize: 18 }}>{CONFIG.brand}</span>
          </a>
          <div className="footer-links">
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
            <a {...book}>Book a call</a>
          </div>
          <span className="footer-copy">© {new Date().getFullYear()} {CONFIG.brand}</span>
        </div>
      </footer>
    </>
  );
}
