'use client'

import { Logo } from '@/components/brand/Logo'
import { siteConfig } from '@/lib/site.config'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-mist px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Logo variant="footer" />
          <p className="mt-3 max-w-md font-sans text-sm leading-7 text-ink/[0.55]">
            Calm digital products shaped with design restraint and frontend care.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-ink/[0.55] transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-sans text-sm text-ink/[0.45]">
            © {currentYear} {siteConfig.name}. Crafted in {siteConfig.location}.
          </p>
        </div>
      </div>
    </footer>
  )
}
