import type { ReactNode } from 'react'

export function VisualFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-landing-border bg-landing-panel shadow-landing">
      <div className="flex h-9 items-center gap-2 border-b border-landing-border px-3">
        <span className="size-2 rounded-full bg-landing-faint" />
        <span className="size-2 rounded-full bg-landing-faint" />
        <span className="size-2 rounded-full bg-landing-faint" />
        <span className="ml-2 font-mono text-[10px] text-landing-faint">{label}</span>
      </div>
      {children}
    </div>
  )
}
