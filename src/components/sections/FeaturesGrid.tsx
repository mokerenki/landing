'use client'

const connectorLogos = [
  { name: 'WhatsApp', file: 'WhatsApp.jpg' },
  { name: 'YouTube', file: 'Youtube.png' },
  { name: 'GitHub', file: 'Github.jpg' },
  { name: 'Xero', file: 'Xero.png' },
  { name: 'Instagram', file: 'instagram.jpg' },
  { name: 'Asana', file: 'asana.png' },
  { name: 'Slack', file: 'slack.png' },
  { name: 'Figma', file: 'Figma.png' },
  { name: 'PayPal', file: 'Paypal.png' },
  { name: 'Shopify', file: 'Shopify.jpg' },
  { name: 'Gmail', file: 'gmail.jpg' },
  { name: 'Google Meet', file: 'Google meet.jpg' },
  { name: 'Google Calendar', file: 'google calendar.png' },
  { name: 'Google Drive', file: 'google drive.png' },
  { name: 'Dropbox', file: 'Dropbox.png' },
  { name: 'HubSpot', file: 'hubspot.png' },
  { name: 'Meta Ads Manager', file: 'meta ads manager.png' },
  { name: 'Microsoft 365', file: 'microsoft365.jpg' },
  { name: 'Notion', file: 'notion.png' },
  { name: 'Sage', file: 'sage.png' },
  { name: 'Salesforce', file: 'salesforce.png' },
  { name: 'SARS eFiling', file: 'sars efiling.png' },
  { name: 'Stripe', file: 'stripe.png' },
  { name: 'TikTok', file: 'tiktok.png' },
  { name: 'Yoco', file: 'Yoco.png' },
  { name: 'iKhokha', file: 'ikhokha.png' },
  { name: 'Airbnb', file: 'airbnb.png' },
]

// Split into three uneven rivers so the rows don't feel like a grid cut into thirds
function chunk<T>(arr: T[], sizes: number[]): T[][] {
  const out: T[][] = []
  let i = 0
  for (const size of sizes) {
    out.push(arr.slice(i, i + size))
    i += size
  }
  return out
}

const [row1, row2, row3] = chunk(connectorLogos, [9, 9, 8])

function LogoChip({ connector }: { connector: { name: string; file: string } }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-5 py-4 shadow-[0_8px_32px_rgba(15,10,25,0.35)]">
      <img
        className="h-8 w-8 shrink-0 rounded-md object-contain"
        src={encodeURI(`/connectors/${connector.file}`)}
        alt={connector.name}
      />
      <span className="whitespace-nowrap text-sm font-medium text-white/90">
        {connector.name}
      </span>
    </div>
  )
}

function MarqueeRow({
  logos,
  direction,
  duration,
}: {
  logos: { name: string; file: string }[]
  direction: 'left' | 'right'
  duration: number
}) {
  const anim = direction === 'left' ? 'synth-scroll-left' : 'synth-scroll-right'
  return (
    <div className="relative flex w-full overflow-hidden py-2">
      <div
        className="flex shrink-0 gap-4 pr-4"
        style={{ animation: `${anim} ${duration}s linear infinite` }}
      >
        {logos.map((c) => (
          <LogoChip key={`${c.name}-a`} connector={c} />
        ))}
      </div>
      <div
        className="flex shrink-0 gap-4 pr-4"
        style={{ animation: `${anim} ${duration}s linear infinite` }}
        aria-hidden="true"
      >
        {logos.map((c) => (
          <LogoChip key={`${c.name}-b`} connector={c} />
        ))}
      </div>
    </div>
  )
}

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28"
      style={{
        background:
          'linear-gradient(180deg, #1E2238 0%, #232A45 14%, #2E3350 28%, #4B4C6A 42%, #746C87 56%, #9C7A82 70%, #B87362 85%, #A86354 100%)',
      }}
    >
      {/* Warm gold light source, lower-left */}
      <div
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[70%] w-[70%] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,214,150,0.55) 0%, rgba(255,190,120,0.25) 35%, transparent 70%)',
        }}
      />
      {/* Subtle star-field texture, top of section only */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 30% 45%, white, transparent), radial-gradient(1px 1px at 55% 15%, white, transparent), radial-gradient(1px 1px at 75% 35%, white, transparent), radial-gradient(1px 1px at 90% 10%, white, transparent), radial-gradient(1px 1px at 20% 60%, white, transparent), radial-gradient(1px 1px at 65% 55%, white, transparent)',
        }}
      />

      <style>{`
        @keyframes synth-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes synth-scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="synth-scroll"] { animation: none !important; }
        }
      `}</style>

      <div className="wrap relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-amber-100/80 mb-4">
            Seamless MCP Integrations
          </p>
          <h2 className="font-display text-[clamp(34px,5vw,56px)] font-semibold tracking-[-0.03em] text-white mb-6">
            Plugged into everything you already run
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            200+ connectors, live. No migrations, no new logins — Synth meets your business exactly where it already works.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <MarqueeRow logos={row1} direction="left" duration={38} />
        <MarqueeRow logos={row2} direction="right" duration={44} />
        <MarqueeRow logos={row3} direction="left" duration={34} />
      </div>

      <div className="wrap relative z-10 mt-16 text-center">
        <a href="/#waitlist" className="inline-flex rounded-full bg-white px-8 py-3 font-medium text-[#3B3350] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20">
          Join the list
        </a>
      </div>
    </section>
  )
}