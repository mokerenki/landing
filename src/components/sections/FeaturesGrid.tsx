'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'research',
    label: 'Research & Analysis',
    tools: [
      { icon: '🔍', name: 'Deep Research', desc: 'Web + document' },
      { icon: '📊', name: 'Data Analysis', desc: 'Charts & models' },
      { icon: '🧠', name: 'Long-term Memory', desc: 'Learns over time' },
    ],
  },
  {
    id: 'productivity',
    label: 'Productivity',
    tools: [
      { icon: '📅', name: 'Scheduling', desc: 'Calendar, TODO & booking' },
      { icon: '📝', name: 'Documents', desc: 'PDFs, forms, slides' },
      { icon: '⚡', name: 'Automations', desc: 'Multi-step tasks' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    tools: [
      { icon: '✉️', name: 'Communications', desc: 'Email & messaging' },
      { icon: '💬', name: 'WhatsApp / Instagram', desc: 'Your existing apps' },
      { icon: '🌐', name: 'Browser Agent', desc: 'Web browsing' },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    tools: [
      { icon: '🔌', name: 'Connectors', desc: '200+ integrations' },
    ],
  },
]

export function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState('research')
  const activeCategory = categories.find((cat) => cat.id === activeTab)

  return (
    <section className="py-24 border-t border-synth-border" id="features">
      <div className="wrap">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="eyebrow text-synth-text-3 uppercase tracking-wider mb-4">
            One platform. Every capability.
          </p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
            Everything in a single agent
          </h2>
          <p className="section-sub text-lg text-synth-text-2 max-w-2xl mx-auto">
            Synth brings together research, communication, scheduling, documents, and integrations — all accessible from where you already work.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-synth-accent text-white shadow-lg shadow-synth-accent/30'
                  : 'bg-synth-surface border border-synth-border text-synth-text-2 hover:border-synth-accent/50 hover:bg-synth-surface/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Bento Grid with Variance */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {activeCategory?.tools.map((tool, index) => {
              // Create variance in sizes and positions
              const isLarge = index === 0
              const isWide = index === activeCategory.tools.length - 1 && activeCategory.tools.length % 2 === 1

              return (
                <div
                  key={tool.name}
                  className={`group relative overflow-hidden rounded-2xl border border-synth-border bg-gradient-to-br from-synth-surface to-synth-surface/50 p-6 transition-all duration-500 hover:shadow-xl hover:border-synth-accent/40 hover:scale-105 ${
                    isLarge ? 'md:col-span-1 md:row-span-2' : ''
                  } ${isWide ? 'lg:col-span-2' : ''}`}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-synth-accent/5 to-transparent pointer-events-none" />

                  {/* Content */}
                  <div className={`relative z-10 flex flex-col ${isLarge ? 'h-full justify-between' : ''}`}>
                    <div>
                      <div
                        className={`mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 origin-left ${
                          isLarge ? 'text-5xl' : 'text-3xl'
                        }`}
                      >
                        {tool.icon}
                      </div>
                      <h3 className={`font-semibold text-synth-text-1 mb-2 transition-colors duration-300 group-hover:text-synth-accent ${
                        isLarge ? 'text-xl' : 'text-base'
                      }`}>
                        {tool.name}
                      </h3>
                    </div>

                    <p className={`text-synth-text-3 transition-colors duration-300 group-hover:text-synth-text-2 ${
                      isLarge ? 'text-base' : 'text-sm'
                    }`}>
                      {tool.desc}
                    </p>
                  </div>

                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-synth-accent to-transparent w-0 group-hover:w-full transition-all duration-500" />
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-synth-text-2 mb-6">
            Ready to experience hands on ai execution?
          </p>
          <button className="px-8 py-3 rounded-full bg-synth-accent text-white font-medium hover:shadow-lg hover:shadow-synth-accent/40 transition-all duration-300 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}