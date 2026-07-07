import { Clock, MessageCircle, AlertTriangle, Airplay, ArrowRight } from "lucide-react"
import { Link } from "wouter"

const dailyItems = [
  { time: "9:00 AM", title: "Client call — Ndali Group", detail: "I've pulled last week's notes and prepped 3 talking points for you", status: "Prepped", statusColor: "bg-blue-100 text-blue-700" },
  { time: "11:30 AM", title: "Reply to Lwazi re: contract", detail: "He's been waiting 2 days — I've drafted a reply for your review", status: "Urgent", statusColor: "bg-red-100 text-red-700" },
  { time: "2:00 PM", title: "Submit Q3 proposal", detail: "3 hours to deadline — want me to pull the draft now?", status: "Focus", statusColor: "bg-emerald-100 text-emerald-700" },
  { time: "5:30 PM", title: "Gym — Clifton CrossFit", detail: "I've blocked this. Traffic is light today, leave by 5:10", status: "Personal", statusColor: "bg-teal-100 text-teal-700" },
]

const alerts = [
  {
    icon: AlertTriangle,
    title: "Conflict detected — 9 AM & 9:30 AM overlap",
    desc: "Your investor call was moved to 9 AM. Your team standup clashes. Want me to reschedule the standup or suggest alternatives?",
    primary: "Reschedule standup",
    secondary: "See options",
    accent: "bg-blue-600 text-white",
  },
  {
    icon: Clock,
    title: "Reminder — proposal due in 90 minutes",
    desc: "You haven't opened the draft yet. I can send it to you now or submit the current version if you're happy with it.",
    primary: "Send me the draft",
    secondary: "Snooze 30 min",
    accent: "bg-blue-600 text-white",
  },
  {
    icon: Airplay,
    title: "Flight price drop — Cape Town → London",
    desc: "Lufthansa dropped to R6,890 (was R7,240). You asked me to watch this. Book now?",
    primary: "Book it",
    secondary: "Ignore",
    accent: "bg-emerald-600 text-white",
  },
]

export function LiveOverviewSection() {
  return (
    <section className="py-24 bg-synth-surface">
      <div className="wrap">
        <div className="grid gap-20">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[2px] text-synth-accent mb-4">
              YOUR DAY, PLANNED
            </p>
            <h2 className="font-display text-[clamp(38px,4.8vw,56px)] font-semibold tracking-[-0.04em] text-synth-text-1 max-w-[780px]">
              Synth briefs you every morning
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] text-synth-text-2 leading-[1.8]">
              Before your day starts, Synth reviews your calendar, emails, and priorities — then sends you a personalised plan. No prompting needed.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[32px] border border-synth-border bg-white shadow-[0_40px_120px_rgba(15,23,42,0.08)] p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-synth-text-3 uppercase tracking-[1.8px] mb-2">Your day at a glance</p>
                    <h3 className="text-[24px] font-semibold text-synth-text-1">Good morning, Amara <span aria-hidden="true">👋</span></h3>
                  </div>
                  <span className="rounded-full border border-synth-border px-4 py-2 text-[13px] font-semibold text-synth-text-2">Monday, 6:45 AM</span>
                </div>

                <div className="rounded-[28px] border border-synth-border bg-synth-bg p-5">
                  <p className="font-semibold text-synth-text-1 mb-2">Your day at a glance</p>
                  <p className="text-[15px] text-synth-text-2 leading-[1.8]">
                    You have 3 meetings, a proposal deadline at 2 PM, and your flight to Jo'burg is Thursday — I've started your packing checklist. One thing needs urgent attention now.
                  </p>
                </div>

                <div className="space-y-4">
                  {dailyItems.map((item) => (
                    <div key={item.time} className="rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-synth-text-2">{item.time}</p>
                          <p className="mt-2 text-[16px] font-semibold text-synth-text-1">{item.title}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-3 text-[14px] text-synth-text-3 leading-[1.75]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8">
                <p className="text-[12px] uppercase tracking-[2px] text-synth-accent mb-4">Emergency alerts</p>
                <h3 className="text-[32px] font-display font-semibold text-synth-text-1 mb-4">Synth taps you when it matters</h3>
                <p className="text-[16px] text-synth-text-2 leading-[1.8] mb-8">
                  When something urgent surfaces — a conflict, a missed message, a deadline creeping up — Synth pushes it immediately and offers to handle it.
                </p>
                <div className="space-y-4">
                  {alerts.map((alert) => {
                    const Icon = alert.icon
                    return (
                      <div key={alert.title} className="rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-synth-accent-light text-synth-accent">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-synth-text-1">{alert.title}</p>
                            <p className="text-sm text-synth-text-3">{alert.desc}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <button className={`rounded-full px-4 py-2 text-sm font-semibold ${alert.accent}`}>
                            {alert.primary}
                          </button>
                          <button className="rounded-full border border-synth-border px-4 py-2 text-sm font-semibold text-synth-text-1 hover:border-synth-accent/50 transition-all">
                            {alert.secondary}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8">
                <p className="text-[12px] uppercase tracking-[2px] text-synth-accent mb-4">On-demand too</p>
                <h3 className="text-[32px] font-display font-semibold text-synth-text-1 mb-4">Ask it anything, anytime</h3>
                <p className="text-[16px] text-synth-text-2 leading-[1.8] mb-8">
                  Beyond your daily plan, Synth handles anything you throw at it — just like messaging a capable friend.
                </p>
                <div className="space-y-5">
                  <div className="rounded-[32px] border border-synth-border bg-synth-bg p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-synth-text-1">Synth</p>
                        <p className="text-sm text-emerald-600">Online</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm">
                        <p>You have 3 things before noon. You've got a 40-min window at 8:20 — enough to prep. Here’s what I’d focus on:</p>
                        <ul className="mt-3 space-y-2 pl-4 text-synth-text-3">
                          <li>• Their Q2 revenue dipped 12% — they’ll want solutions</li>
                          <li>• Open item from last call: delivery timeline</li>
                          <li>• They responded well to case studies last time</li>
                        </ul>
                        <p className="mt-3 text-[12px] text-synth-text-3">Synth · 9:05 AM</p>
                      </div>
                      <div className="rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm">
                        <p>What’s on my plate today and do I have time to prep for the Ndali call?</p>
                        <p className="mt-2 text-[12px] text-synth-accent-light">9:05 AM · ✓✓</p>
                      </div>
                      <div className="rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm self-end max-w-[75%]">
                        <p>Perfect. Also remind me to call my mum at 7pm</p>
                        <p className="mt-2 text-[12px] text-synth-accent-light">9:06 AM · ✓✓</p>
                      </div>
                      <div className="rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm">
                        <p>Done — I’ll ping you at 6:55 PM with a heads-up. Anything else before your 9 AM?</p>
                        <p className="mt-3 text-[12px] text-synth-text-3">Synth · 9:06 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-synth-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                    Explore Synth live
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="rounded-full border border-synth-border px-4 py-2 text-sm text-synth-text-3">Live chat preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
