import { Check } from 'lucide-react'
import { Button } from '../../atoms/button'
import { Link } from '@tanstack/react-router'
import type { PricingPlan } from '@pairdbase_client/config/src/constants'

export function PricingCard({ plan, annual }: { plan: PricingPlan; annual: boolean }) {
  const price = annual ? plan.annual : plan.monthly
  return (
    <article
      className={
        plan.featured
          ? 'relative flex min-h-[440px] flex-col rounded-lg border border-landing-accent bg-landing-panel p-6'
          : 'flex min-h-[440px] flex-col rounded-lg border border-landing-border bg-landing-panel p-6'
      }
    >
      {plan.featured && (
        <span className="absolute right-4 top-4 font-mono text-[9px] uppercase text-landing-accent">
          Most popular
        </span>
      )}
      <h3 className="text-base font-semibold text-landing-strong">{plan.name}</h3>
      <p className="mt-2 min-h-5 text-xs text-landing-muted">{plan.note}</p>
      <div className="mt-7 min-h-14">
        {price !== undefined ? (
          <>
            <span className="text-4xl font-semibold text-landing-strong">${price}</span>
            <span className="text-xs text-landing-muted"> / seat / mo</span>
          </>
        ) : (
          <span className="text-3xl font-semibold text-landing-strong">Custom</span>
        )}
      </div>
      <Button
        asChild
        variant={plan.featured ? 'default' : 'outline'}
        className={
          plan.featured
            ? 'landing-cta mt-6 w-full'
            : 'mt-6 w-full border-landing-border bg-transparent text-landing-strong hover:bg-landing-band'
        }
      >
        <Link to={plan.name === 'Enterprise' ? '/connections' : '/app'}>{plan.cta}</Link>
      </Button>
      <ul className="mt-7 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-xs text-landing-muted">
            <Check className="mt-0.5 size-3.5 shrink-0 text-landing-accent" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}
