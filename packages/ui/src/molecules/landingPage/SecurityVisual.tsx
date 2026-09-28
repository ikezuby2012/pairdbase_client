import { LockKeyhole, ShieldCheck } from 'lucide-react'
import { VisualFrame } from './VisualFrame'

export function SecurityVisual() {
  return (
    <VisualFrame label="workspace access / policy">
      <div className="p-5">
        <div className="flex items-center justify-between border-b border-landing-border pb-5">
          <div>
            <p className="text-sm font-medium text-landing-strong">Production access</p>
            <p className="mt-1 text-[10px] text-landing-faint">Policy enforced for 18 members</p>
          </div>
          <ShieldCheck className="size-6 text-landing-success" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            ['8', 'read'],
            ['3', 'write'],
            ['2', 'admin'],
          ].map(([n, l]) => (
            <div key={l} className="rounded-md border border-landing-border bg-landing-bg p-3">
              <p className="font-mono text-lg text-landing-strong">{n}</p>
              <p className="mt-1 text-[9px] uppercase text-landing-faint">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-md border border-landing-border p-3 text-[10px] text-landing-muted">
          <LockKeyhole className="size-4 text-landing-accent" />
          <span>Credentials encrypted · vault rotation active</span>
        </div>
      </div>
    </VisualFrame>
  )
}
