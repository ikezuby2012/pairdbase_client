import { VisualFrame } from './VisualFrame'

export function SchemaVisual() {
  return (
    <VisualFrame label="schema / all connections">
      <div className="grid h-72 grid-cols-[1fr_1.25fr]">
        <div className="border-r border-landing-border p-4 font-mono text-[10px] text-landing-muted">
          <p className="text-landing-strong">⌄ postgres-prod</p>
          <p className="mt-3 pl-3">⌄ Tables</p>
          {['customers', 'orders', 'products'].map((x, i) => (
            <p
              key={x}
              className={
                i === 1
                  ? 'mt-2 rounded bg-landing-accent-soft px-2 py-1.5 text-landing-accent'
                  : 'mt-2 px-2'
              }
            >
              ▦ {x}
            </p>
          ))}
          <p className="mt-4 text-landing-strong">› mongo-events</p>
          <p className="mt-3 text-landing-strong">› redis-cache</p>
        </div>
        <div className="p-4">
          <p className="text-sm font-medium text-landing-strong">orders</p>
          <p className="mt-1 font-mono text-[9px] text-landing-faint">18.7M rows · public</p>
          <div className="mt-5 space-y-3 font-mono text-[9px]">
            {[
              ['id', 'uuid'],
              ['customer_id', 'uuid'],
              ['status', 'text'],
              ['total', 'numeric'],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between border-b border-landing-border pb-2">
                <span className="text-landing-strong">{a}</span>
                <span className="text-landing-accent">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  )
}
