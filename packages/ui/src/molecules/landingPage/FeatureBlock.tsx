import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function FeatureBlock({
  icon,
  eyebrow,
  title,
  body,
  visual,
  reverse = false,
}: {
  icon: ReactNode
  eyebrow: string
  title: string
  body: string
  visual: ReactNode
  reverse?: boolean
}) {
  return (
    <article className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="flex size-9 items-center justify-center rounded-md border border-landing-border bg-landing-panel text-landing-accent [&>svg]:size-4">
          {icon}
        </div>
        <p className="landing-eyebrow mt-7">{eyebrow}</p>
        <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-landing-strong sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-7 text-landing-muted">{body}</p>
        <a
          href="#pricing"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-landing-strong hover:text-landing-accent"
        >
          See how it works <ChevronRight className="size-4" />
        </a>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{visual}</div>
    </article>
  )
}
