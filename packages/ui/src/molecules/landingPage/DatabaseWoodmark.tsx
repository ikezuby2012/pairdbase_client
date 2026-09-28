export function DatabaseWordmark({
  name,
  mark,
  tone,
}: {
  name: string
  mark: string
  tone: string
}) {
  return (
    <div className="landing-connector-pill">
      <span
        className={`grid size-7 shrink-0 place-items-center rounded-full border border-landing-border bg-landing-bg font-mono text-[9px] font-semibold ${tone}`}
      >
        {mark}
      </span>
      <span className="whitespace-nowrap text-sm font-medium">{name}</span>
    </div>
  )
}
