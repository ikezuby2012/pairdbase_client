import { VisualFrame } from './VisualFrame'

export function HistoryVisual() {
  return (
    <VisualFrame label="query history / production">
      <div className="p-4">
        {[
          ['Customer LTV', '124 ms', 'success'],
          ['MRR by plan', '89 ms', 'success'],
          ['Expired sessions', 'blocked', 'warning'],
          ['Orders export', '310 ms', 'success'],
        ].map(([q, t, s], i) => (
          <div
            key={q}
            className={
              i === 1
                ? 'grid grid-cols-[1fr_auto] items-center rounded-md border border-landing-accent/30 bg-landing-accent-soft p-3'
                : 'grid grid-cols-[1fr_auto] items-center border-b border-landing-border p-3'
            }
          >
            <div>
              <p className="font-mono text-[11px] text-landing-strong">{q}</p>
              <p className="mt-1 text-[10px] text-landing-faint">Sep 12 · postgres-prod · alex</p>
            </div>
            <span
              className={
                s === 'warning'
                  ? 'font-mono text-[9px] text-landing-warning'
                  : 'font-mono text-[9px] text-landing-success'
              }
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}
