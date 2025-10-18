'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <Script
      defer
      data-domain="eucalabs.com"
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}
