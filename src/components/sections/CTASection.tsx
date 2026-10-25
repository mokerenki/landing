import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 4500)
  }

  // Updated to match Manus AI capabilities & agent solutions
  const manusCapabilities = [
    { id: 1, label: "Web Research" },
    { id: 2, label: "Cash flow" },
    { id: 3, label: "Documents" },
    { id: 4, label: "Sales data" },
    { id: 5, label: "Risk signal" },
    { id: 6, label: "Market Intelligence" },
    { id: 7, label: "Claim reviews" },
    { id: 8, label: "Analytics" },
  ]

  return (
    <section className="py-24 border-t border-synth-border relative overflow-hidden" id="waitlist">
      {/* Keyframe Animations for Converging Tickers */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 30s linear infinite;
        }
      `}</style>

      {/* Hero Banner Ticker Container with Parallel Grid Lines */}
      <div className="w-full mb-16 relative border-y border-synth-border py-4 bg-synth-bg/40 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4">
          
          {/* Left Track (Boxes Moving Inward Toward Center Logo) */}
          <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_85%,transparent)]">
            <div className="animate-marquee-right flex gap-3 items-center">
              {[...manusCapabilities, ...manusCapabilities, ...manusCapabilities].map((item, idx) => (
                <div
                  key={`left-${idx}`}
                  className="px-5 py-2.5 bg-synth-surface border border-synth-border rounded-md text-[13px] text-synth-text-2 font-medium shadow-sm whitespace-nowrap min-w-[130px] text-center"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Centered Logo Box */}
          <div className="mx-6 flex-shrink-0 z-10 bg-synth-surface border border-synth-border rounded-lg p-3 shadow-md flex items-center justify-center">
            <img src="logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          </div>

          {/* Right Track (Boxes Moving Inward Toward Center Logo) */}
          <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_90%,transparent)]">
            <div className="animate-marquee-left flex gap-3 items-center">
              {[...manusCapabilities, ...manusCapabilities, ...manusCapabilities].map((item, idx) => (
                <div
                  key={`right-${idx}`}
                  className="px-5 py-2.5 bg-synth-surface border border-synth-border rounded-md text-[13px] text-synth-text-2 font-medium shadow-sm whitespace-nowrap min-w-[130px] text-center"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Glow */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-synth-accent-light rounded-full pointer-events-none"
        style={{ filter: "blur(80px)", opacity: 0.6 }}
      />

      <div className="wrap relative z-10">
        <div className="bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <h2 className="font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3">
            This is what comes after software. Your business on autopilot, all in one platform.
          </h2>
          <p className="text-[15px] text-synth-text-2 leading-[1.7] mb-7">
            We're building something we'd want to use ourselves. you'll be first to get access when we launch, Join the waitlist!!
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 max-w-[380px] mx-auto mb-3.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"
            />
            <button
              type="submit"
              disabled={submitted}
              className={`w-full text-white rounded-full px-4 py-3 text-[14px] font-medium transition-colors ${
                submitted ? 'bg-synth-green' : 'bg-synth-accent hover:bg-[#1D4ED8]'
              }`}
            >
              {submitted ? "✓ You're on the list!" : "Join waitlist"}
            </button>
          </form>

          <p className="text-[12px] text-synth-text-3">No spam. No commitment. Just early access.</p>
          <div className="flex justify-center gap-5 mt-5">
            <a href="mailto:hello@onsite48.com?subject=API access" className="text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors">
              ⟨/⟩ API access
            </a>
            <a href="mailto:healthcare@onsite48.com" className="text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors">
              🏥 Healthcare demo
            </a>
            <a href="mailto:hello@onsite48.com?subject=Enterprise" className="text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors">
              🏢 Enterprise
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}