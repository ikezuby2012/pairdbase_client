export function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid size-7 place-items-center rounded-full border-2 border-landing-panel bg-landing-accent-soft font-mono text-[8px] text-landing-accent">
      {initials}
    </span>
  )
}
