import { Link } from "wouter"

const solutions = [
  { label: "Marketing", href: "/solutions/marketing" },
  { label: "Sales", href: "/solutions/sales" },
  { label: "Finance", href: "/solutions/finance" },
  { label: "Product", href: "/solutions/product" },
  { label: "Personal", href: "/solutions/personal" },
  { label: "Healthcare Admin", href: "/solutions/healthcare" },
]

const product = [
  "Features", "Pricing", "API", "WhatsApp Integration", "Telegram Integration", "Custom MCPs"
]

const company = [
  "About", "Blog", "Careers", "Contact", "Trust Centre", "Brand Assets"
]

const legal = [
  "Privacy Policy", "Terms of Service", "POPIA Compliance", "Data Processing", "Cookie Policy"
]

export function Footer() {
  return (
    <footer className="border-t border-synth-border bg-synth-surface">
      <div className="wrap py-14">
        <div className="grid grid-cols-2 md:grid-cols-[1.8fr_repeat(4,1fr)] gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-[22px] text-synth-text-1 tracking-[-0.3px]">
              <em>synth</em>
            </Link>
            <p className="text-[13px] text-synth-text-3 leading-[1.65] mt-2 max-w-[200px]">
              Autonomous AI for every business function — delivered where you already work.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3">Product</h4>
            <ul className="space-y-2">
              {product.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-synth-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-synth-text-3">© 2026 Synth AI · Built in South Africa · hello@synth.ai</p>
          <div className="flex gap-3">
            {["LinkedIn", "X / Twitter", "Instagram", "WhatsApp"].map((item) => (
              <a key={item} href="#" className="text-[12px] text-synth-text-3 hover:text-synth-text-1 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
