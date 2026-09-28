import { GithubIcon } from '../../atoms/githubIcon'
import { LogoMark } from '../../atoms/logoMark'

const databases = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'SQL Server', 'Oracle']

export function Footer() {
  const cols = [
    { t: 'Product', l: ['Workspace', 'Pricing', 'Docs', 'Changelog'] },
    {
      t: 'Features',
      l: ['AI Assistant', 'Collaboration', 'Schema Browser', 'Query History', 'Security'],
    },
    { t: 'Databases', l: databases },
    { t: 'Company', l: ['About', 'Blog', 'Careers', 'Contact'] },
    { t: 'Legal', l: ['Privacy', 'Terms', 'Security', 'DPA'] },
  ]
  return (
    <footer className="border-t border-landing-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-sm font-semibold text-landing-strong">Pairdbase</span>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-5 text-landing-muted">
              A browser-native workspace for querying every database with your team.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com" aria-label="GitHub" className="landing-icon-btn">
                <GithubIcon />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h3 className="font-mono text-[10px] uppercase text-landing-faint">{c.t}</h3>
              <ul className="mt-4 space-y-3">
                {c.l.map((x) => (
                  <li key={x}>
                    <span className="cursor-default text-xs text-landing-muted transition-colors hover:text-landing-strong">
                      {x}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-landing-border pt-6 font-mono text-[9px] text-landing-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Pairdbase Working name.</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-landing-success" /> All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
