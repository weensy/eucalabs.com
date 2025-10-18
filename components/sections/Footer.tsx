'use client'

import { siteConfig } from '@/lib/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-mist border-t border-ink/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-sans text-sm text-ink/50">
          © {currentYear} {siteConfig.name}.
        </p>
      </div>
    </footer>
  )
}
