import { Bot, Check } from 'lucide-react'
import { VisualFrame } from './VisualFrame'

export function AiVisual() {
  return (
    <VisualFrame label="assistant / validated">
      <div className="p-5 sm:p-7">
        <div className="ml-auto max-w-[85%] rounded-md border border-landing-border bg-landing-bg p-3 text-xs text-landing-strong">
          Show failed payments by plan for the last 30 days.
        </div>
        <div className="mt-4 max-w-[92%] rounded-md border border-landing-accent/30 bg-landing-accent-soft p-4">
          <div className="flex items-center gap-2 text-xs text-landing-accent">
            <Bot className="size-4" /> Schema checked
          </div>
          <pre className="mt-4 overflow-x-auto font-mono text-[10px] leading-5 text-landing-muted">
            <span className="text-landing-accent">SELECT</span> p.plan, COUNT(*) failures{'\n'}
            <span className="text-landing-accent">FROM</span> payments p{'\n'}
            <span className="text-landing-accent">WHERE</span> p.status ={' '}
            <span className="text-landing-code-string">'failed'</span>
            {'\n'}
            <span className="text-landing-accent">GROUP BY</span> p.plan;
          </pre>
          <div className="mt-4 flex items-center gap-2 border-t border-landing-border pt-3 font-mono text-[9px] text-landing-muted">
            <Check className="size-3 text-landing-success" /> Read-only · 3 columns verified
          </div>
        </div>
      </div>
    </VisualFrame>
  )
}
