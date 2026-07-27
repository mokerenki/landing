'use client'

import { useRef, useState } from "react"
import { Clock, AlertTriangle, UserPlus, Airplay, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "wouter"

const dailyItems = [
  { time: "5:00 AM", title: "Review marketing campaign draft — Q3 launch", detail: "Pulled last quarter's top performers, drafted 3 creative routes.", tag: "marketing" },
  { time: "10:00 AM", title: "Sales enablement — competitor battle cards", detail: "Acme dropped a new pricing page — comparison ready for your 10 AM.", tag: "sales" },
  { time: "1:00 PM", title: "Product sync — roadmap update", detail: "Correlated 400 support tickets, flagged 3 requested features.", tag: "product" },
  { time: "4:00 PM", title: "Finance report — weekly cash flow", detail: "Spotted an upcoming cash gap, drafted a recommendation.", tag: "finance" },
]

const alerts = [
  {
    icon: AlertTriangle,
    title: "Negative comments spike — @synthai on X",
    desc: "Mentions up 340% in 2 hours. Response thread drafted, engineering alerted.",
    tag: "brand risk",
    primary: "Approve response",
    secondary: "See thread",
  },
  {
    icon: UserPlus,
    title: "High-intent leads — competitor dissatisfaction on Instagram",
    desc: "7 users complained about a rival's product. 5 match your ICP, outreach drafted.",
    tag: "sales",
    primary: "Send messages",
    secondary: "Ignore",
  },
  {
    icon: Clock,
    title: "RFP deadline — 90 minutes remaining",
    desc: "Acme RFP is 80% complete. Missing compliance docs pulled in.",
    tag: "deadline",
    primary: "Open draft",
    secondary: "Snooze 30 min",
  },
  {
    icon: Airplay,
    title: "Top 3 TikTok hooks this week",
    desc: "Best-performing hooks in your niche, ready to adapt for launch video.",
    tag: "marketing",
    primary: "View hooks",
    secondary: "Send to editor",
  },
]

const chatLog = [
  { from: "synth", text: "Acme just launched pricing 20% below yours at the low end. Their new blog post targets your top 3 keywords — I've drafted a response article. Sentiment on your last release is 89% positive." },
  { from: "user", text: "What's on my plate today, anything before the all-hands?" },
  { from: "user", text: "Also pull the latest NPS scores into the board deck." },
  { from: "synth", text: "Done — NPS is in the deck with 4 key drivers highlighted. Your 10 AM competitor update is ready when you are." },
]

const pages = [
  { key: "glance", eyebrow: "BUSINESS · OVERVIEW", title: "Good morning." },
  { key: "alerts", eyebrow: "BUSINESS · ALERTS", title: "Heads up." },
  { key: "ask", eyebrow: "BUSINESS · ASK", title: "Ask it anything." },
]

function CardShell({
  children,
  eyebrow,
  title,
  ctaLabel,
}: {
  children: React.ReactNode
  eyebrow: string
  title: string
  ctaLabel: string
}) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-[0_30px_80px_rgba(10,17,30,0.35)]">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400">{eyebrow}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400">Mon · 06:15</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="rounded-md bg-[#0A111E] px-2 py-1 text-[11px] font-bold text-white">Synth OS</span>
        <span className="text-[13px] text-slate-400">Daily Briefing</span>
      </div>
      <h3 className="mt-5 text-[26px] font-semibold tracking-[-0.02em] text-slate-900">{title}</h3>
      <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1">{children}</div>
      <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A111E] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export function LiveOverviewSection() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const next = () => setActive((i) => Math.min(i + 1, pages.length - 1))
  const prev = () => setActive((i) => Math.max(i - 1, 0))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -50) next()
    if (delta > 50) prev()
    touchStartX.current = null
  }

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        background:
          "linear-gradient(180deg, #0A111E 0%, #162032 16%, #2B384E 30%, #4A5A73 44%, #7D818A 56%, #A88E81 66%, #D88A58 76%, #E87328 86%, #F25C05 94%, #FA7D00 100%)",
      }}
    >
      {/* Mountain silhouette + water reflection at the base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="h-full w-full">
          <polygon
            points="0,120 120,70 260,110 380,55 520,100 660,40 820,95 980,60 1120,105 1260,50 1440,90 1440,160 0,160"
            fill="#1C1614"
          />
        </svg>
        <div
          className="absolute inset-x-0 bottom-0 h-10"
          style={{
            background:
              "linear-gradient(180deg, #1C1614 0%, #3A2518 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(250,125,0,0.25) 0px, rgba(250,125,0,0.25) 2px, transparent 2px, transparent 40px)",
          }}
        />
      </div>

      <div className="wrap relative z-10">
        <div className="mb-16">
          <p className="text-[12px] font-semibold uppercase tracking-[2px] text-amber-100/80 mb-4">
            YOUR WORK, AUTONOMOUSLY HANDLED
          </p>
          <h2 className="font-display text-[clamp(38px,4.8vw,56px)] font-semibold tracking-[-0.04em] text-white max-w-[780px]">
            Synth briefs you every morning
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] text-white/70 leading-[1.8]">
            Before your team logs in, Synth has already scanned your tools, flagged threats and opportunities, and prepared a prioritized plan — swipe through what it found.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] items-start">
          {/* Card stack */}
          <div
            className="relative mx-auto h-[560px] w-full max-w-[480px]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {pages.map((page, i) => {
              const diff = i - active
              let style: React.CSSProperties = { zIndex: 30 - Math.abs(diff) }

              if (diff === 0) {
                style = { ...style, transform: "translate(0px, 0px) scale(1)", opacity: 1, zIndex: 30 }
              } else if (diff === 1) {
                style = { ...style, transform: "translate(28px, -28px) scale(0.95)", opacity: 0.9, zIndex: 20 }
              } else if (diff === 2) {
                style = { ...style, transform: "translate(52px, -52px) scale(0.9)", opacity: 0.6, zIndex: 10 }
              } else if (diff < 0) {
                style = { ...style, transform: "translate(-140%, 0px) scale(0.95)", opacity: 0, zIndex: 0 }
              } else {
                style = { ...style, transform: "translate(80px, -80px) scale(0.85)", opacity: 0, zIndex: 0 }
              }

              return (
                <div
                  key={page.key}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={style}
                >
                  {page.key === "glance" && (
                    <CardShell eyebrow={page.eyebrow} title={page.title} ctaLabel="Open full briefing">
                      <p className="text-[14px] leading-[1.7] text-slate-500">
                        Monitored competitors, drafted campaigns, correlated feedback, flagged a cash-flow gap. One item needs your decision now.
                      </p>
                      {dailyItems.map((item) => (
                        <div key={item.time} className="border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{item.time}</p>
                          <p className="mt-1 text-[15px] font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-1 flex items-center gap-2 text-[13px] text-slate-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F25C05]" />
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </CardShell>
                  )}

                  {page.key === "alerts" && (
                    <CardShell eyebrow={page.eyebrow} title={page.title} ctaLabel="Resolve with Synth">
                      <p className="text-[14px] leading-[1.7] text-slate-500">
                        When a competitor moves or a deadline slips, Synth pushes it here — drafted and ready to approve.
                      </p>
                      {alerts.map((alert) => {
                        const Icon = alert.icon
                        return (
                          <div key={alert.title} className="flex gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
                            <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-50 text-[#F25C05]">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-[15px] font-semibold text-slate-900">{alert.title}</p>
                              <p className="mt-1 text-[13px] text-slate-500">{alert.desc}</p>
                              <span className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-wide text-slate-400">{alert.tag}</span>
                              <div className="mt-2 flex flex-wrap gap-2">
                                <button className="rounded-full bg-[#0A111E] px-3 py-1.5 text-[12px] font-semibold text-white transition-transform hover:scale-[1.03]">
                                  {alert.primary}
                                </button>
                                <button className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 transition-colors hover:border-slate-400">
                                  {alert.secondary}
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </CardShell>
                  )}

                  {page.key === "ask" && (
                    <CardShell eyebrow={page.eyebrow} title={page.title} ctaLabel="Chat with Synth">
                      <p className="text-[14px] leading-[1.7] text-slate-500">
                        Beyond the daily plan, Synth handles anything you throw at it — research, drafting, analysis.
                      </p>
                      <div className="space-y-3">
                        {chatLog.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`rounded-2xl px-4 py-3 text-[13px] leading-[1.6] ${
                              msg.from === "synth"
                                ? "bg-slate-50 text-slate-600"
                                : "ml-auto max-w-[85%] bg-[#0A111E] text-white"
                            }`}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    </CardShell>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right-hand page rail, mirrors the MON/SUN/SAT list in the reference */}
          <div className="flex flex-row items-center justify-center gap-4 lg:flex-col lg:items-end lg:gap-5 lg:pt-10">
            {pages.map((page, i) => (
              <button
                key={page.key}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[2px] transition-colors"
                style={{ color: i === active ? "#FFFFFF" : "rgba(255,255,255,0.4)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: i === active ? "#FA7D00" : "rgba(255,255,255,0.4)" }}
                />
                {page.title.replace(".", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Nav controls + waitlist CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={active === 0}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={active === pages.length - 1}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A111E] transition-transform hover:scale-105">
            Explore Synth live
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}