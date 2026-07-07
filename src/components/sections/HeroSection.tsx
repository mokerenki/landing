import { useState, useEffect, FormEvent } from "react"

const chips = [
  { icon: "📋", text: "Book a flight and add it to my calendar" },
  { icon: "📊", text: "Analyse our top 5 competitors and summarise pricing" },
  { icon: "💊", text: "Send refill reminders to diabetic patients" },
  { icon: "📝", text: "Draft a PRD for our new onboarding flow" },
  { icon: "🤝", text: "Enrich 200 leads and draft personalised outreach" },
  { icon: "💹", text: "Build a DCF model from this annual report" },
  { icon: "📅", text: "Reschedule all my Friday meetings" },
  { icon: "📢", text: "Create a campaign brief for our product launch" },
  { icon: "❌", text: "Identify and resolve our top 10 claim denials" },
  { icon: "🔍", text: "Research the market opportunity in East Africa" },
]

export function HeroSection() {
  const [chipIdx, setChipIdx] = useState(0)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setChipIdx((prev) => (prev + 1) % chips.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 4500)
  }

  const currentChip = chips[chipIdx]

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="wrap relative z-10">
        <div className="text-center max-w-[800px] mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-synth-accent-light border border-synth-accent/20 text-synth-accent text-[13px] font-medium rounded-full px-4 py-1.5 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-synth-accent animate-blink" />
            Private beta
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(44px,6.5vw,80px)] font-normal leading-[1.06] tracking-[-2px] text-synth-text-1 mb-5">
            The autonomous AI<br />that works for <em className="text-synth-accent">every</em> function
          </h1>

          {/* Chip carousel */}
          <div className="flex items-center justify-center gap-2.5 mb-8 flex-wrap">
            <span className="text-[15px] text-synth-text-2">Watch it</span>
            <div 
              className="inline-flex items-center gap-1.5 bg-synth-surface border border-synth-border-med rounded-full px-3.5 py-1.5 text-[14px] font-medium text-synth-text-1 shadow-sm transition-all duration-300"
              key={chipIdx}
            >
              <span className="text-[16px]">{currentChip.icon}</span>
              <span>{currentChip.text}</span>
            </div>
            <span className="text-[15px] text-synth-text-2">for you</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-[420px] mx-auto mb-3.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              autoComplete="email"
              className="flex-1 bg-synth-surface border border-synth-border-med rounded-full px-5 py-3 text-[15px] text-synth-text-1 outline-none shadow-sm transition-all focus:border-synth-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder:text-synth-text-3"
            />
            <button
              type="submit"
              disabled={submitted}
              className={`text-white rounded-full px-6 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${submitted ? 'bg-synth-green' : 'bg-synth-text-1 hover:bg-[#2A2835]'}`}
            >
              {submitted ? "✓ You're on the list!" : "Get early access"}
            </button>
          </form>
          <p className="text-[13px] text-synth-text-3">
            <strong className="text-synth-text-2 font-medium">2,240 people</strong> already on the waitlist · Free during beta
          </p>
        </div>
      </div>
    </section>
  )
}
