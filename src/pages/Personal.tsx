import { SolutionPageLayout } from "@/components/sections/SolutionPageLayout"

const workflows = [
  {
    tag: "Daily Planning",
    tagColor: "#EFF6FF",
    tagText: "#2563EB",
    title: "Morning brief delivered before your day starts",
    desc: "Onsite48 reviews your calendar, emails, and open tasks overnight — then sends you a personalised briefing with a prioritised plan before you even open your laptop.",
  },
  {
    tag: "Emergency Alerts",
    tagColor: "#FDECEA",
    tagText: "#C0392B",
    title: "Tapped on the shoulder when it matters",
    desc: "Meeting conflicts, missed messages, deadline creep, price drops on watched items — Onsite48 surfaces what needs you immediately and offers to handle it.",
  },
  {
    tag: "Autonomous Tasks",
    tagColor: "#E6FFE6",
    tagText: "#1A6B1A",
    title: "One message. Onsite48 handles the rest.",
    desc: "Give Onsite48 a complex, multi-step task — research, book, draft, send — and walk away. It executes every step in the background and reports back when done.",
  },
  {
    tag: "Long-term Memory",
    tagColor: "#FFF0E6",
    tagText: "#B84D00",
    title: "Gets smarter the longer you use it",
    desc: "Onsite48 remembers your preferences, your relationships, your recurring tasks, and your goals — so it needs less instruction and gives better results over time.",
  },
]

export default function Personal() {
  return (
    <SolutionPageLayout
      eyebrow="Onsite48 Personal"
      headline="Your proactive AI"
      headlineAccent="chief of staff"
      subhead="Onsite48 plans your day, pushes urgent tasks, and handles complex work end-to-end — all inside WhatsApp or Telegram. No new app to learn."
      ctaText="Join waitlist"
      ctaHref="/#waitlist"
      workflowTitle="What makes Onsite48 Personal different"
      workflowSub="Proactive. Not reactive. Every other AI waits for you to ask. Onsite48 pushes tasks to you."
      workflows={workflows}
      heroImage="/personal.png"
      heroImageAlt="Personal solution image"
    />
  )
}
