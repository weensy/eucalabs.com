import { Logo } from '@/components/brand/Logo'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Principles', href: '#principles' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-mist/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="text-ink transition-opacity duration-200 hover:opacity-80">
          <Logo variant="header" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-ink/60 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
