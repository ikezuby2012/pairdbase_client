import { Avatar } from './Avatar'
import { VisualFrame } from './VisualFrame'

export function CollabVisual() {
  return (
    <VisualFrame label="shared session / 3 online">
      <div className="relative h-72 p-6 font-mono text-[11px] leading-7 text-landing-muted">
        <p>
          <span className="text-landing-accent">SELECT</span> customer_id,
        </p>
        <p className="pl-5">
          SUM(total) <span className="text-landing-accent">AS</span> lifetime_value
        </p>
        <p>
          <span className="text-landing-accent">FROM</span> orders
        </p>
        <p>
          <span className="text-landing-accent">GROUP BY</span> customer_id
        </p>
        <p>
          <span className="text-landing-accent">ORDER BY</span> lifetime_value DESC;
        </p>
        <div className="absolute left-[44%] top-20">
          <span className="block h-5 w-px bg-landing-collab" />
          <span className="rounded-sm bg-landing-collab px-1.5 py-0.5 text-[8px] text-landing-accent-ink">
            Jon
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-landing-border pt-4">
          <span className="text-[9px] text-landing-faint">Shared tab · changes saved</span>
          <div className="flex -space-x-2">
            <Avatar initials="AM" />
            <Avatar initials="JK" />
            <Avatar initials="SC" />
          </div>
        </div>
      </div>
    </VisualFrame>
  )
}
