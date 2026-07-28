import { useState, useEffect, useRef, FormEvent } from "react"

const verticals = [
  "Sales",
  "Marketing",
  "Finance",
  "Product",
  "Executive Workflow",
  "Healthcare Admin",
]

// Muted, brand-aligned particle palette — kept desaturated so it reads as
// "premium ambient motion" rather than a game/confetti effect.
const PARTICLE_COLORS = ["#1E3A8A", "#2563EB", "#93C5FD", "#818CF8"]

const PARTICLE_COUNT = 100
const CURSOR_RADIUS = 140 // how far the cursor's force field reaches
const REPEL_STRENGTH = 900 // higher = stronger push
const SPRING_STRENGTH = 0.012 // pull back toward home position
const DAMPING = 0.94 // velocity decay per frame (inertia/friction)

type Particle = {
  x: number
  y: number
  homeX: number
  homeY: number
  vx: number
  vy: number
  mass: number
  size: number
  color: string
  driftPhase: number
  driftSpeed: number
}

function useParticleField(sectionRef: React.RefObject<HTMLElement>) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const seedParticles = (width: number, height: number) => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
        const homeX = Math.random() * width
        const homeY = Math.random() * height
        const mass = 0.6 + Math.random() * 1.4
        return {
          x: homeX,
          y: homeY,
          homeX,
          homeY,
          vx: 0,
          vy: 0,
          mass,
          size: 1.2 + (1 / mass) * 1.6,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          driftPhase: Math.random() * Math.PI * 2,
          driftSpeed: 0.15 + Math.random() * 0.25,
        }
      })
    }

    const resize = () => {
      const rect = section.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      seedParticles(rect.width, rect.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMove = (clientX: number, clientY: number) => {
      const rect = section.getBoundingClientRect()
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top, active: true }
    }
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }

    section.addEventListener("mousemove", onMouseMove)
    section.addEventListener("touchmove", onTouchMove)
    section.addEventListener("mouseleave", onLeave)
    section.addEventListener("touchend", onLeave)

    let frame = 0
    const draw = () => {
      const rect = section.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      frame += 1

      const mouse = mouseRef.current

      for (const p of particlesRef.current) {
        // Gentle idle wander so the field feels alive even without cursor input
        if (!prefersReducedMotion) {
          p.driftPhase += 0.01 * p.driftSpeed
          const driftX = Math.cos(p.driftPhase) * 0.15
          const driftY = Math.sin(p.driftPhase * 1.3) * 0.15

          // Spring force pulling particle back toward its home position
          const toHomeX = (p.homeX - p.x) * SPRING_STRENGTH
          const toHomeY = (p.homeY - p.y) * SPRING_STRENGTH

          let forceX = toHomeX + driftX
          let forceY = toHomeY + driftY

          // Cursor repulsion field — "floating gravity" push
          if (mouse.active) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const distSq = dx * dx + dy * dy
            const dist = Math.sqrt(distSq) || 0.001
            if (dist < CURSOR_RADIUS) {
              const falloff = 1 - dist / CURSOR_RADIUS
              const push = (REPEL_STRENGTH * falloff * falloff) / (p.mass * dist)
              forceX += dx * push * 0.016
              forceY += dy * push * 0.016
            }
          }

          p.vx = (p.vx + forceX / p.mass) * DAMPING
          p.vy = (p.vy + forceY / p.mass) * DAMPING
          p.x += p.vx
          p.y += p.vy
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.65
        ctx.shadowColor = p.color
        ctx.shadowBlur = 6
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      section.removeEventListener("mousemove", onMouseMove)
      section.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("mouseleave", onLeave)
      section.removeEventListener("touchend", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [sectionRef])

  return canvasRef
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useParticleField(sectionRef)

  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/.netlify/functions/waitlist-count")
      .then((res) => res.json())
      .then((data) => setWaitlistCount(data.count))
      .catch(() => setWaitlistCount(null))
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "waitlist",
        email: email.trim(),
      }).toString(),
    })
      .then(() => {
        setSubmitted(true)
        setEmail("")
        if (waitlistCount !== null) setWaitlistCount((prev) => (prev ?? 0) + 1)
        setTimeout(() => setSubmitted(false), 4500)
      })
      .catch((err) => console.error("Form submission error:", err))
  }

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Mouse-trailing particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[1]"
      />

      <div className="wrap relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-synth-accent-light border border-synth-accent/20 text-synth-accent text-[13px] font-medium rounded-full px-4 py-1.5 mb-9">
            <div className="w-1.5 h-1.5 rounded-full bg-synth-accent animate-blink" />
            Private Beta
          </div>

          {/* Headline — exactly three lines */}
          <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.14] tracking-[-1.5px] text-synth-text-1 mb-10">
            Meet Synth.
            <br />
            secure, always-on autonomous agents 

            <br />
            <em className="text-synth-accent not-italic">
              for your business
            </em>
          </h1>

          {/* Restyled department list — a single breathing line, not a wall of boxes */}
          <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-2 mb-12 text-[13px] font-medium text-synth-text-3 tracking-wide">
            {verticals.map((v, i) => (
              <span key={v} className="flex items-center gap-3">
                <span className="hover:text-synth-accent transition-colors cursor-default">
                  {v}
                </span>
                {i < verticals.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-synth-border-med" />
                )}
              </span>
            ))}
          </div>

          {/* Form */}
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-2 max-w-[420px] mx-auto mb-3.5"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <input type="hidden" name="bot-field" />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              autoComplete="email"
              className="w-full bg-synth-surface border border-synth-border-med rounded-full px-5 py-3 text-[15px] text-synth-text-1 outline-none shadow-sm transition-all focus:border-synth-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder:text-synth-text-3"
            />
            <button
              type="submit"
              disabled={submitted}
              className={`w-full text-white rounded-full px-4 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${
                submitted ? "bg-synth-green" : "bg-synth-text-1 hover:bg-[#2A2835]"
              }`}
            >
              {submitted ? "✓ You're on the list!" : "Get early access"}
            </button>
          </form>

          <p className="text-[13px] text-synth-text-3">
            {waitlistCount !== null ? (
              <strong className="text-synth-text-2 font-medium">
                {waitlistCount.toLocaleString()} people
              </strong>
            ) : (
              <strong className="text-synth-text-2 font-medium">2,272 people</strong>
            )}{" "}
            already on the waitlist ·{" "}
          </p>
        </div>
      </div>
    </section>
  )
}