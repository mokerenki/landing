import { useState } from "react"
import { SolutionPageLayout } from "@/components/sections/SolutionPageLayout"

const workflowTabs = [
  {
    id: "discovery",
    label: "Discovery",
    tag: "Discovery",
    tagColor: "#EFF6FF",
    tagText: "#2563EB",
    title: "Synthesise user feedback into actionable themes",
    desc: "Upload interview transcripts, support tickets, or review data — Synth clusters feedback into prioritised themes with evidence-backed recommendations.",
  },
  {
    id: "documentation",
    label: "Documentation",
    tag: "Documentation",
    tagColor: "#FFF0E6",
    tagText: "#B84D00",
    title: "Draft complete PRDs from a brief",
    desc: "Describe a feature in plain language and Synth produces a full product requirements document — user stories, acceptance criteria, edge cases, and open questions included.",
  },
  {
    id: "competitive",
    label: "Competitive Research",
    tag: "Competitive Research",
    tagColor: "#E6FFE6",
    tagText: "#1A6B1A",
    title: "Map the competitive landscape in minutes",
    desc: "Analyse competitors' product pages, changelogs, and reviews simultaneously. Get a structured teardown of features, positioning gaps, and opportunities.",
  },
  {
    id: "roadmapping",
    label: "Roadmapping",
    tag: "Roadmapping",
    tagColor: "#E6F4FF",
    tagText: "#1752A3",
    title: "Build data-informed roadmap proposals",
    desc: "Combine user feedback, business priorities, and competitive signals into a draft roadmap — with rationale for each item and trade-off analysis built in.",
  },
]

export default function Product() {
  const [activeTab, setActiveTab] = useState(workflowTabs[0].id)
  const active = workflowTabs.find((t) => t.id === activeTab) || workflowTabs[0]

  return (
    <>
      {/* Main page header & image – using the existing layout */}
      <SolutionPageLayout
        eyebrow="Synth for Product"
        headline="From ideas to"
        headlineAccent="shipped features"
        subhead="Draft PRDs, run competitive research, generate spec documents, synthesise user feedback, and prototype ideas — all from a single conversation."
        ctaText="Join waitlist"
        ctaHref="/#waitlist"
        workflowTitle="End-to-end product workflows"
        workflowSub="From discovery to delivery — Synth handles the research so your team can focus on building."
        // Empty workflows so the layout doesn't render its own list
        workflows={[]}
        // The hero image – displayed exactly as in the layout
        heroImage="/product.png"
        heroImageAlt="Synth product workflow"
      />

      {/* Custom interactive tabbed section */}
      <section className="py-16 lg:py-24 -mt-12">
        <div className="wrap max-w-[900px] mx-auto">
          {/* Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-synth-border pb-4">
            {workflowTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-synth-accent text-white shadow-md"
                    : "bg-synth-surface border border-synth-border text-synth-text-2 hover:border-synth-accent/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-synth-surface border border-synth-border rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: active.tagColor,
                  color: active.tagText,
                }}
              >
                {active.tag}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-synth-text-1 mb-3">
              {active.title}
            </h3>
            <p className="text-synth-text-2 leading-relaxed text-[16px]">
              {active.desc}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}