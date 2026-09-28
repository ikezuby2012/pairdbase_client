import type { ReactNode } from 'react'
import { Avatar } from './Avatar'
import { MousePointer2 } from 'lucide-react'

function VisualFrame({ label, children }: { label: string; children: ReactNode }) {
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

export function EditorPreview() {
  return (
    <div className="relative mx-auto max-w-6xl text-left">
      <div className="absolute -inset-6 -z-10 rounded-xl border border-landing-border/30" />
      <VisualFrame label="postgres-prod / revenue_analysis.sql">
        <div className="grid h-[390px] grid-cols-[150px_minmax(0,1fr)] sm:grid-cols-[220px_minmax(0,1fr)]">
          <div className="hidden border-r border-landing-border p-3 sm:block">
            <p className="font-mono text-[10px] uppercase text-landing-faint">Explorer</p>
            <div className="mt-4 space-y-2 font-mono text-[11px] text-landing-muted">
              <p className="text-landing-strong">⌄ postgres-prod</p>
              <p className="pl-3">⌄ public</p>
              <p className="pl-6 text-landing-accent">▦ orders</p>
              <p className="pl-6">▦ customers</p>
              <p className="pl-6">▦ products</p>
              <p className="pl-3">› analytics</p>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex h-9 items-center border-b border-landing-border px-3 font-mono text-[10px] text-landing-muted">
              <span className="text-landing-strong">revenue_analysis.sql</span>
              <span className="ml-auto text-landing-accent">▶ Run</span>
            </div>
            <pre className="overflow-hidden p-5 font-mono text-[11px] leading-6 sm:text-xs">
              <code>
                <span className="text-landing-accent">WITH</span>{' '}
                <span className="text-landing-code-alt">monthly_revenue</span>{' '}
                <span className="text-landing-accent">AS</span> ({'\n'}{' '}
                <span className="text-landing-accent">SELECT</span>
                {'\n'} date_trunc(<span className="text-landing-code-string">'month'</span>,
                created_at) <span className="text-landing-accent">AS</span> month,{'\n'}{' '}
                SUM(total_amount) <span className="text-landing-accent">AS</span> revenue{'\n'}{' '}
                <span className="text-landing-accent">FROM</span> orders{'\n'}{' '}
                <span className="text-landing-accent">WHERE</span> status ={' '}
                <span className="text-landing-code-string">'paid'</span>
                {'\n'} <span className="text-landing-accent">GROUP BY</span> 1{'\n'}){'\n'}
                <span className="text-landing-accent">SELECT</span> month, revenue{' '}
                <span className="text-landing-accent">FROM</span> monthly_revenue;
              </code>
            </pre>
            <div className="absolute right-8 top-36 hidden items-center gap-2 sm:flex">
              <span className="rounded bg-landing-collab px-2 py-1 font-mono text-[9px] text-landing-accent-ink">
                Maya
              </span>
              <MousePointer2 className="size-4 fill-landing-collab text-landing-collab" />
            </div>
            <div className="absolute bottom-7 right-6 flex -space-x-2">
              <Avatar initials="AM" />
              <Avatar initials="JK" />
              <Avatar initials="SC" />
            </div>
          </div>
        </div>
      </VisualFrame>
      <div className="mx-auto h-8 w-[88%] rounded-b-xl border-x border-b border-landing-border bg-landing-band" />
    </div>
  )
}
