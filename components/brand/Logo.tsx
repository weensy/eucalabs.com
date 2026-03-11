import { siteConfig } from '@/lib/site.config'

type LogoProps = {
  variant?: 'header' | 'footer'
}

const styles = {
  header: {
    wrapper: 'gap-3 leading-none',
    mark: 'h-7 w-7 shrink-0 translate-y-[2px]',
    wordmark: 'flex items-end gap-2.5 leading-none',
    euca: 'font-serif text-[1.95rem] tracking-[-0.045em] text-ink',
    labs: 'pb-[0.24rem] font-sans text-[0.62rem] uppercase tracking-[0.34em] text-ink/[0.58]',
  },
  footer: {
    wrapper: 'gap-4 leading-none',
    mark: 'h-9 w-9 shrink-0 translate-y-[1.5px]',
    wordmark: 'flex items-end gap-3 leading-none',
    euca: 'font-serif text-[2.8rem] tracking-[-0.05em] text-ink',
    labs: 'pb-[0.34rem] font-sans text-[0.78rem] uppercase tracking-[0.36em] text-ink/[0.58]',
  },
} as const

export function Logo({ variant = 'header' }: LogoProps) {
  const style = styles[variant]

  return (
    <span className={`inline-flex items-center ${style.wrapper}`}>
      <svg
        viewBox="0 0 100 100"
        className={style.mark}
        aria-hidden="true"
        focusable="false"
      >
        <g fill="currentColor">
          <ellipse cx="45" cy="42" rx="10" ry="18" transform="rotate(-26 45 42)" />
          <ellipse cx="58" cy="58" rx="10" ry="18" transform="rotate(24 58 58)" />
          <rect
            x="48.5"
            y="31"
            width="3"
            height="42"
            rx="1.5"
            transform="rotate(-10 50 50)"
          />
        </g>
      </svg>
      <span className={style.wordmark} aria-label={siteConfig.name}>
        <span className={style.euca}>Euca</span>
        <span className={style.labs}>Labs</span>
      </span>
    </span>
  )
}
