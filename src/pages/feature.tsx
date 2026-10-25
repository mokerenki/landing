import { useState, useEffect } from "react";

// ─── feature data ─────────────────────────────────────────────────────────────
interface Feature {
  id: string;
  number: string;
  icon: string;
  tag: string;
  headline: string;
  description: string;
  accent: string;
  visual: "heartbeat" | "agent" | "tools" | "code" | "browser" | "skills";
}

const features: Feature[] = [
  {
    id: "heartbeat",
    number: "01",
    icon: "💓",
    tag: "Proactive Heartbeat",
    headline: "Onsite48 doesn't wait to be asked",
    description:
      "Unlike chatbots, Onsite48 continuously monitors your calendar, emails, deadlines, and connected tools. It identifies important events before they become problems and proactively surfaces what matters — unprompted, every day.",
    accent: "#2563EB",
    visual: "heartbeat",
  },
  {
    id: "multiagent",
    number: "02",
    icon: "⚡",
    tag: "Autonomous Multi-Agent",
    headline: "One task. Dozens of agents. Zero hand-holding.",
    description:
      "Onsite48 breaks complex tasks into independent sub-tasks and deploys a dedicated agent for each — running simultaneously, in parallel, each with its own fresh context. Quality stays consistent, no matter the scale.",
    accent: "#7C3AED",
    visual: "agent",
  },
  {
    id: "toolintegration",
    number: "03",
    icon: "🔌",
    tag: "Seamless Tool Integration",
    headline: "Connects to the tools your business runs on",
    description:
      "Onsite48 reads from and writes to your existing tools — Google Workspace, Slack, Xero, HubSpot, and more. No manual exports, no copy-paste. One continuous flow across your entire stack.",
    accent: "#059669",
    visual: "tools",
  },
  {
    id: "custommcp",
    number: "04",
    icon: "🛠️",
    tag: "Custom MCP & API",
    headline: "Connect your own systems. Build on top.",
    description:
      "Pre-built connectors are just the start. Register custom MCP servers for your internal tools, or trigger Onsite48 programmatically via REST API. Webhooks deliver results back to your own infrastructure.",
    accent: "#D97706",
    visual: "code",
  },
  {
    id: "browser",
    number: "05",
    icon: "🌐",
    tag: "Browser Operator",
    headline: "Navigates the web with your session",
    description:
      "Onsite48 operates inside your actual browser session — authenticated, from your IP. It navigates, clicks, fills forms, and completes multi-step tasks across platforms that would block a standard bot.",
    accent: "#0891B2",
    visual: "browser",
  },
  {
    id: "skills",
    number: "06",
    icon: "🎯",
    tag: "Agent Skills",
    headline: "Build a workflow once. Run it forever.",
    description:
      "Package any successful task into a reusable Skill. Your team's best processes — competitor research, client onboarding, board reporting — become one-command workflows anyone can trigger.",
    accent: "#DB2777",
    visual: "skills",
  },
];

// ─── visual renderers ────────────────────────────────────────────────────────

function VisualHeartbeat() {
  return (
    <div className="viz-heartbeat">
      <div className="time">● 6:45 AM · Morning briefing</div>
      <div className="msg">
<div className="sender">
           <div className="avatar">O</div>
           <div>
             <span className="name">Onsite48</span> <span className="sub">· just now</span>
           </div>
         </div>
        <strong>Good morning.</strong> Here's today:<br />
        — <strong>9 AM</strong> · Ndali Group call · notes prepped<br />
        — <strong>11:30 AM</strong> · Lwazi's contract reply <span className="highlight">overdue (2d)</span><br />
        — <strong>2 PM</strong> · Q3 proposal · draft not opened yet<br />
        — <strong>5:30 PM</strong> · Gym · leave by 5:10
      </div>
      <div className="msg msg-urgent">
        <span className="highlight">⚠️ Urgent:</span> Your 9 AM and 9:30 AM just clashed — investor call moved.{" "}
        <span className="highlight">Reschedule standup?</span>
      </div>
    </div>
  );
}

function VisualAgent() {
  // Explicitly typed tuple array: [x, y, color]
  const agentPositions: [number, number, string][] = [
    [70, 40, "#7C3AED"],
    [140, 30, "#8B5CF6"],
    [280, 30, "#A78BFA"],
    [350, 40, "#7C3AED"],
    [60, 170, "#8B5CF6"],
    [140, 185, "#A78BFA"],
    [280, 185, "#8B5CF6"],
    [350, 170, "#7C3AED"],
  ];

  return (
    <div className="viz-agent">
      <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="210" cy="110" r="28" fill="#7C3AED" opacity=".15" className="pulse-ring" />
        <circle cx="210" cy="110" r="18" fill="#7C3AED" opacity=".25" />
        <circle cx="210" cy="110" r="10" fill="#7C3AED" />
        <text x="210" y="114" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">
          ORCH
        </text>
        {agentPositions.map(([x, y, color], i) => (
          <g key={i}>
            <circle cx={String(x)} cy={String(y)} r="14" fill={color} opacity=".3" />
            <circle cx={String(x)} cy={String(y)} r="9" fill={color} opacity=".5" />
            <circle cx={String(x)} cy={String(y)} r="5" fill={color} />
            <text
              x={String(x)}
              y={String(y + 3)}
              textAnchor="middle"
              fill="#fff"
              fontSize="5"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              {i + 1}
            </text>
            <line
              x1="210"
              y1="110"
              x2={String(x)}
              y2={String(y)}
              stroke={color}
              strokeWidth="1.2"
              opacity=".3"
              strokeDasharray="4 4"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.2s" repeatCount="indefinite" />
            </line>
          </g>
        ))}
      </svg>
    </div>
  );
}

function VisualTools() {
  return (
    <div className="viz-tools">
      <div className="viz-tools-grid">
        <div className="viz-tool">
          <span className="icon">📧</span>Gmail
        </div>
        <div className="viz-tool">
          <span className="icon">💬</span>Slack
        </div>
        <div className="viz-tool">
          <span className="icon">📊</span>Xero
        </div>
        <div className="viz-tool">
          <span className="icon">📋</span>HubSpot
        </div>
        <div className="viz-tool">
          <span className="icon">📅</span>Calendar
        </div>
        <div className="viz-tool">
          <span className="icon">📝</span>Notion
        </div>
        <div className="viz-tool">
          <span className="icon">📁</span>Drive
        </div>
        <div className="viz-tool">
          <span className="icon">🔗</span>API
        </div>
        <div className="viz-tool-center">
           Onsite48 <span>MCP</span>
        </div>
      </div>
    </div>
  );
}

function VisualCode() {
  return (
    <div className="viz-code">
      <div className="code-header">
        <span className="code-dot"></span>
        <span className="code-dot"></span>
        <span className="code-dot"></span>
        <span style={{ marginLeft: 8, fontSize: 11, color: "#8B949E", fontWeight: 500 }}>
          POST /api/onsite48/v1/tasks
        </span>
      </div>
      <div className="code-body">
        <span className="kw">POST</span> <span className="fn">/tasks</span>
        <br />
        <span className="cmt">// Trigger a competitor research workflow</span>
        <br />
        {"{"}
        <br />
        &nbsp;&nbsp;<span className="str">"task"</span>: <span className="str">"Research top 20 competitors"</span>,
        <br />
        &nbsp;&nbsp;<span className="str">"channel"</span>: <span className="str">"whatsapp"</span>,
        <br />
        &nbsp;&nbsp;<span className="str">"priority"</span>: <span className="str">"high"</span>,
        <br />
        &nbsp;&nbsp;<span className="str">"webhook"</span>: <span className="str">"https://your.app/callback"</span>
        <br />
        {"}"}
      </div>
    </div>
  );
}

function VisualBrowser() {
  return (
    <div className="viz-browser">
      <div className="viz-browser-window">
        <div className="viz-browser-bar">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="url">🔒 apply.company.com/jobs</span>
        </div>
        <div className="viz-browser-body">
          <div className="field">
            <label>Full name</label>
            <input type="text" value="Alex Rivera" readOnly />
          </div>
          <div className="row2">
            <div className="field">
              <label>Role</label>
              <select>
                <option>Senior Product Manager</option>
              </select>
            </div>
            <div className="field">
              <label>Location</label>
              <input type="text" value="Remote · Cape Town" readOnly />
            </div>
          </div>
          <div className="field">
            <label>Resume</label>
            <input type="text" value="alex_rivera_cv_2026.pdf ✓" readOnly style={{ color: "#059669" }} />
          </div>
          <button className="btn-submit">
            ⏳ Submitting <span className="pulse">·</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function VisualSkills() {
  return (
    <div className="viz-skills">
      <div className="viz-skills-flow">
        <div className="viz-skills-step done">
          <span className="num">✓</span>
          <div className="content">
            <div className="title">/competitor-report</div>
            <div className="desc">Weekly competitor intelligence</div>
          </div>
          <span className="arrow">→</span>
        </div>
        <div className="viz-skills-step active">
          <span className="num">2</span>
          <div className="content">
            <div className="title">/claim-denial-batch</div>
            <div className="desc">Healthcare claim processing</div>
          </div>
          <span className="arrow">→</span>
        </div>
        <div className="viz-skills-step">
          <span className="num">3</span>
          <div className="content">
            <div className="title">/new-lead-brief</div>
            <div className="desc">Sales meeting prep</div>
          </div>
          <span className="arrow">→</span>
        </div>
        <div className="viz-skills-step" style={{ borderColor: "rgba(219,39,119,.06)", background: "rgba(255,255,255,.4)" }}>
          <span className="num" style={{ background: "var(--text-muted)" }}>
            +
          </span>
          <div className="content">
            <div className="title" style={{ color: "var(--text-muted)" }}>
              Build your own
            </div>
            <div className="desc">Package any task into a reusable Skill</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderVisual(visual: Feature["visual"]) {
  switch (visual) {
    case "heartbeat":
      return <VisualHeartbeat />;
    case "agent":
      return <VisualAgent />;
    case "tools":
      return <VisualTools />;
    case "code":
      return <VisualCode />;
    case "browser":
      return <VisualBrowser />;
    case "skills":
      return <VisualSkills />;
    default:
      return <div style={{ padding: 40, textAlign: "center", color: "var(--text-muted)" }}>Visual</div>;
  }
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Features() {
  const [activeId, setActiveId] = useState<string>("heartbeat");

  // IntersectionObserver for nav highlight
  useEffect(() => {
    const sections = document.querySelectorAll(".feature");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.35, rootMargin: "-20px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToFeature = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        /* ── reset & base ────────────────────────────────────────────────────────── */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #F6F8FA;
          --surface: #FFFFFF;
          --text: #0A0D14;
          --text-secondary: #4A5A7A;
          --text-muted: #8E9AB5;
          --border: rgba(10, 13, 20, .06);
          --radius: 32px;
          --shadow-card: 0 20px 60px -12px rgba(0, 0, 0, .08), 0 8px 24px -6px rgba(0, 0, 0, .04);
          --shadow-soft: 0 4px 20px rgba(0, 0, 0, .02);
          --transition: .35s cubic-bezier(.22, 1, .36, 1);
        }

        .ft-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.5;
        }

        .serif {
          font-family: 'Instrument Serif', 'Georgia', 'Times New Roman', serif;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 20px;
          }
        }

        /* ── hero ────────────────────────────────────────────────────────────────── */
        .hero {
          padding: 100px 0 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37, 99, 235, .06) 0%, transparent 100%),
            radial-gradient(ellipse 40% 30% at 80% 20%, rgba(124, 58, 237, .04) 0%, transparent 100%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37, 99, 235, .08);
          border: 1px solid rgba(37, 99, 235, .12);
          color: #2563EB;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 16px;
          margin-bottom: 28px;
          position: relative;
        }

        .hero h1 {
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text);
          max-width: 720px;
          margin: 0 auto 18px;
          position: relative;
        }

        .hero h1 em {
          font-style: italic;
          color: #2563EB;
        }

        .hero p {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 44px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          position: relative;
        }

        .btn-primary {
          background: #0A0D14;
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
        }

        .btn-primary:hover {
          background: #1a1f2e;
          transform: scale(1.02);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid rgba(10, 13, 20, .1);
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
        }

        .btn-secondary:hover {
          background: rgba(10, 13, 20, .04);
          border-color: rgba(10, 13, 20, .2);
        }

        /* ── sticky nav ──────────────────────────────────────────────────────────── */
        .nav-sticky {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(246, 248, 250, .82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0 32px;
        }

        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 10px 0;
        }

        .nav-inner::-webkit-scrollbar {
          display: none;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
          transition: var(--transition);
        }

        .nav-btn:hover {
          background: rgba(10, 13, 20, .04);
          color: var(--text);
        }

        .nav-btn.active {
          background: rgba(37, 99, 235, .08);
          color: #2563EB;
        }

        .nav-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .nav-sticky {
            padding: 0 12px;
          }
          .nav-btn {
            font-size: 11px;
            padding: 5px 12px;
          }
        }

        /* ── feature sections ────────────────────────────────────────────────────── */
        .feature {
          padding: 100px 0;
          border-bottom: 1px solid var(--border);
          scroll-margin-top: 80px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp .7s ease forwards;
        }

        .feature:nth-child(1) { animation-delay: .05s; }
        .feature:nth-child(2) { animation-delay: .1s; }
        .feature:nth-child(3) { animation-delay: .15s; }
        .feature:nth-child(4) { animation-delay: .2s; }
        .feature:nth-child(5) { animation-delay: .25s; }
        .feature:nth-child(6) { animation-delay: .3s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature:last-of-type {
          border-bottom: none;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* left column */
        .feature-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-number {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          background: rgba(10, 13, 20, .04);
          border-radius: 999px;
          padding: 4px 14px 4px 10px;
          width: fit-content;
        }

        .feature-tag span {
          font-size: 16px;
        }

        .feature-left h2 {
          font-size: clamp(26px, 3.2vw, 38px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-top: 4px;
        }

        .feature-left p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 440px;
        }

        /* right column — visual container */
        .feature-visual {
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }

        .feature-visual-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* ── visual variants ────────────────────────────────────────────────────── */

        /* 1. Heartbeat */
        .viz-heartbeat {
          background: linear-gradient(145deg, #0A0D14 0%, #141B2B 100%);
          border-radius: var(--radius);
          padding: 32px 28px;
          width: 100%;
          color: #fff;
        }

        .viz-heartbeat .time {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, .3);
          margin-bottom: 20px;
        }

        .viz-heartbeat .msg {
          background: rgba(255, 255, 255, .04);
          border: 1px solid rgba(255, 255, 255, .06);
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 10px;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, .75);
        }

        .viz-heartbeat .msg strong {
          color: #fff;
          font-weight: 600;
        }

        .viz-heartbeat .msg .highlight {
          color: #60A5FA;
        }

        .viz-heartbeat .msg-urgent {
          border-left: 3px solid #EF4444;
          background: rgba(239, 68, 68, .06);
        }

        .viz-heartbeat .msg-urgent .highlight {
          color: #F87171;
        }

        .viz-heartbeat .sender {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .viz-heartbeat .sender .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .viz-heartbeat .sender .name {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        .viz-heartbeat .sender .sub {
          font-size: 12px;
          color: rgba(255, 255, 255, .3);
        }

        /* 2. Multi-Agent */
        .viz-agent {
          background: linear-gradient(145deg, #0A0D14 0%, #1A1035 100%);
          border-radius: var(--radius);
          padding: 40px 32px;
          width: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .viz-agent svg {
          width: 100%;
          max-width: 420px;
          height: auto;
        }

        .viz-agent .pulse-ring {
          animation: pulse-ring 2.4s ease-in-out infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: .3; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }

        /* 3. Tools */
        .viz-tools {
          background: linear-gradient(145deg, #F0FDF4 0%, #E6F7ED 100%);
          border-radius: var(--radius);
          padding: 32px 28px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .viz-tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 420px;
        }

        .viz-tool {
          background: rgba(255, 255, 255, .7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(5, 150, 105, .1);
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: #065F46;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }

        .viz-tool .icon {
          font-size: 20px;
          display: block;
          margin-bottom: 4px;
        }

        .viz-tool-center {
          grid-column: span 4;
          background: rgba(5, 150, 105, .12);
          border: 1px solid rgba(5, 150, 105, .2);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          font-weight: 600;
          color: #065F46;
          font-size: 14px;
          letter-spacing: .3px;
        }

        .viz-tool-center span {
          background: #065F46;
          color: #fff;
          padding: 2px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          margin-left: 8px;
        }

        /* 4. Code */
        .viz-code {
          background: #0D1117;
          border-radius: var(--radius);
          padding: 28px 24px;
          width: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .viz-code .code-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .viz-code .code-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .viz-code .code-dot:nth-child(1) { background: #FF5F57; }
        .viz-code .code-dot:nth-child(2) { background: #FFBD2E; }
        .viz-code .code-dot:nth-child(3) { background: #28C840; }

        .viz-code .code-body {
          font-family: 'Geist Mono', 'SF Mono', 'Fira Code', ui-monospace, monospace;
          font-size: 12px;
          line-height: 2;
          color: #E2E8F0;
          white-space: pre-wrap;
        }

        .viz-code .code-body .kw { color: #FF7B72; }
        .viz-code .code-body .str { color: #A5D6FF; }
        .viz-code .code-body .fn { color: #D2A8FF; }
        .viz-code .code-body .cmt { color: #8B949E; font-style: italic; }
        .viz-code .code-body .num { color: #79C0FF; }
        .viz-code .code-body .op { color: #FF7B72; }

        /* 5. Browser */
        .viz-browser {
          background: linear-gradient(145deg, #ECFEFF 0%, #D5F5F9 100%);
          border-radius: var(--radius);
          padding: 24px 20px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viz-browser-window {
          background: #fff;
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          width: 100%;
          max-width: 400px;
          overflow: hidden;
          border: 1px solid rgba(10, 13, 20, .04);
        }

        .viz-browser-bar {
          background: #F1F3F5;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(10, 13, 20, .04);
        }

        .viz-browser-bar .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .viz-browser-bar .dot:nth-child(1) { background: #FF5F57; }
        .viz-browser-bar .dot:nth-child(2) { background: #FFBD2E; }
        .viz-browser-bar .dot:nth-child(3) { background: #28C840; }

        .viz-browser-bar .url {
          flex: 1;
          background: rgba(255, 255, 255, .7);
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 500;
          text-align: center;
          margin: 0 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .viz-browser-body {
          padding: 20px 18px 18px;
        }

        .viz-browser-body .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .viz-browser-body .field label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .viz-browser-body .field input,
        .viz-browser-body .field select {
          background: #F6F8FA;
          border: 1px solid rgba(10, 13, 20, .08);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          font-family: inherit;
          color: var(--text);
          outline: none;
          transition: var(--transition);
        }

        .viz-browser-body .field input:focus,
        .viz-browser-body .field select:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, .08);
        }

        .viz-browser-body .row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .viz-browser-body .btn-submit {
          background: #2563EB;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          width: 100%;
          cursor: default;
          font-family: inherit;
          margin-top: 4px;
        }

        .viz-browser-body .btn-submit .pulse {
          display: inline-block;
          animation: pulse-dot 1.6s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }

        /* 6. Skills */
        .viz-skills {
          background: linear-gradient(145deg, #FDF2F8 0%, #F8E8F0 100%);
          border-radius: var(--radius);
          padding: 28px 24px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viz-skills-flow {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 400px;
        }

        .viz-skills-step {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, .75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(219, 39, 119, .08);
          border-radius: 12px;
          padding: 12px 16px;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }

        .viz-skills-step .num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #DB2777;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .viz-skills-step .content {
          flex: 1;
        }

        .viz-skills-step .content .title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }

        .viz-skills-step .content .desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .viz-skills-step .arrow {
          color: var(--text-muted);
          font-size: 14px;
        }

        .viz-skills-step.done {
          background: rgba(219, 39, 119, .06);
          border-color: rgba(219, 39, 119, .15);
        }

        .viz-skills-step.done .num {
          background: #059669;
        }

        .viz-skills-step.active {
          border-color: #DB2777;
          box-shadow: 0 4px 20px rgba(219, 39, 119, .08);
        }

        .viz-skills-step.active .num {
          animation: pulse-step 1.8s ease-in-out infinite;
        }

        @keyframes pulse-step {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        /* ── responsive ──────────────────────────────────────────────────────────── */
        @media (max-width: 860px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .feature-left p {
            max-width: 100%;
          }

          .feature-visual {
            min-height: 260px;
            padding: 24px;
          }

          .feature {
            padding: 64px 0;
          }

          .hero {
            padding: 72px 0 48px;
          }

          .viz-tools-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .viz-tool-center {
            grid-column: span 3;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }

          .feature-grid {
            gap: 28px;
          }

          .feature-visual {
            min-height: 220px;
            padding: 16px;
            border-radius: 20px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .hero p {
            font-size: 15px;
          }

          .viz-heartbeat {
            padding: 20px 16px;
          }
          .viz-heartbeat .msg {
            font-size: 12px;
            padding: 12px 14px;
          }

          .viz-tools-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .viz-tool-center {
            grid-column: span 2;
          }

          .viz-code .code-body {
            font-size: 10px;
            line-height: 1.8;
          }

          .viz-browser-body .row2 {
            grid-template-columns: 1fr;
          }

          .viz-skills-step {
            padding: 10px 12px;
          }
          .viz-skills-step .content .title {
            font-size: 12px;
          }
          .viz-skills-step .content .desc {
            font-size: 11px;
          }

          .feature-left h2 {
            font-size: 24px;
          }

          .nav-sticky {
            padding: 0 8px;
          }
        }

        /* ── footer ──────────────────────────────────────────────────────────────── */
        .footer-cta {
          padding: 80px 0 64px;
          text-align: center;
          border-top: 1px solid var(--border);
          background: var(--surface);
        }

        .footer-cta h2 {
          font-size: clamp(28px, 3.6vw, 44px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text);
          max-width: 520px;
          margin: 0 auto 14px;
        }

        .footer-cta p {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 440px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        .footer-cta form {
          display: flex;
          gap: 10px;
          max-width: 400px;
          margin: 0 auto 12px;
        }

        .footer-cta input {
          flex: 1;
          background: #fff;
          border: 1px solid rgba(10, 13, 20, .12);
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 14px;
          font-family: inherit;
          color: var(--text);
          outline: none;
          transition: var(--transition);
        }

        .footer-cta input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, .06);
        }

        .footer-cta .btn-primary {
          background: #2563EB;
          padding: 12px 28px;
        }

        .footer-cta .btn-primary:hover {
          background: #1D4ED8;
        }

        .footer-cta .footnote {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 480px) {
          .footer-cta form {
            flex-direction: column;
          }
          .footer-cta input {
            border-radius: 12px;
          }
          .footer-cta .btn-primary {
            border-radius: 12px;
            width: 100%;
          }
        }
      `}</style>

      <div className="ft-container">
        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="container">
            <div className="hero-badge">✦ Platform features</div>
            <h1 className="serif">
              Six capabilities.<br />
              <em>One agent that uses all of them.</em>
            </h1>
            <p>
              Most AI tools give you a chat window. Onsite48 is built from six interconnected
              capabilities that work together — from your first message to a completed result,
              without you managing any step in between.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Get early access</button>
              <button className="btn-secondary">Watch demo →</button>
            </div>
          </div>
        </section>

        {/* ─── STICKY NAV ─── */}
        <nav className="nav-sticky">
          <div className="nav-inner">
            {features.map((f) => (
              <button
                key={f.id}
                className={`nav-btn ${activeId === f.id ? "active" : ""}`}
                onClick={() => scrollToFeature(f.id)}
              >
                <span className="nav-dot" style={{ background: f.accent }} />
                {f.tag}
              </button>
            ))}
          </div>
        </nav>

        {/* ─── FEATURES ─── */}
        {features.map((f) => (
          <section key={f.id} id={f.id} className="feature">
            <div className="container">
              <div className="feature-grid">
                <div className="feature-left">
                  <div className="feature-number">{f.number} / 06</div>
                  <div className="feature-tag">
                    <span>{f.icon}</span> {f.tag}
                  </div>
                  <h2 className="serif">{f.headline}</h2>
                  <p>{f.description}</p>
                </div>
                <div className="feature-visual">
                  <div className="feature-visual-inner">{renderVisual(f.visual)}</div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ─── FOOTER CTA ─── */}
        <section className="footer-cta">
          <div className="container">
            <h2 className="serif">The gap between thinking and doing just closed.</h2>
            <p>
              We're building something we'd want to use ourselves. Join the waitlist
              and you'll be first to get access.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // placeholder
              }}
            >
              <input type="email" placeholder="your@email.com" required />
              <button type="submit" className="btn-primary">
                Join waitlist
              </button>
            </form>
            <p className="footnote">Free during beta. No credit card required.</p>
          </div>
        </section>
      </div>
    </>
  );
}