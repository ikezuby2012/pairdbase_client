export function SectionIntro({
  eyebrow,
  title,
  body,
  align = 'center',
}: {
  eyebrow: string
  title: string
  body: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <p className="landing-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-landing-strong sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-landing-muted">{body}</p>
    </div>
  )
}
