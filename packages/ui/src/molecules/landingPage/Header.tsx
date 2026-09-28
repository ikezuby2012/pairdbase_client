import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '../../atoms/button'
import { ArrowRight, Menu, Monitor, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import type { ThemeMode } from '../../hooks/useTheme'
import { LogoMark } from '../../atoms/logoMark'
import { GithubIcon } from '../../atoms/githubIcon'

function ThemeIconButton({ mode, toggleTheme }: { mode: ThemeMode; toggleTheme: () => void }) {
  const label =
    mode === 'auto'
      ? 'Theme: Auto (System). Click for light mode.'
      : mode === 'light'
        ? 'Theme: Light. Click for dark mode.'
        : 'Theme: Dark. Click for auto mode.'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="landing-icon-btn"
      aria-label={label}
      title={label}
    >
      {mode === 'auto' && <Monitor className="size-[18px]" />}
      {mode === 'light' && <Sun className="size-[18px]" />}
      {mode === 'dark' && <Moon className="size-[18px]" />}
    </button>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { mode, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-landing-border bg-landing-bg/90 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="QueryForge home">
          <LogoMark />
          <span className="truncate text-[15px] font-semibold text-landing-strong">Pairdbase</span>
          <span className="hidden rounded border border-landing-border px-1.5 py-0.5 font-mono text-[9px] uppercase text-landing-muted sm:inline">
            early access
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <a className="landing-nav" href="#product">
            Product
          </a>
          <a className="landing-nav" href="#pricing">
            Pricing
          </a>
          <span className="landing-nav cursor-default">Docs</span>
          <span className="landing-nav cursor-default">Blog</span>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="text-landing-muted transition-colors hover:text-landing-strong"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <ThemeIconButton mode={mode} toggleTheme={toggleTheme} />
          <Link to="/signin" className="landing-nav">
            Sign in
          </Link>
          <Button asChild size="sm" className="landing-cta">
            <Link to="/signup">
              Get early access <ArrowRight />
            </Link>
          </Button>
        </div>
        <button
          className="landing-icon-btn md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-landing-border bg-landing-bg px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <a className="landing-mobile-nav" href="#product" onClick={() => setMenuOpen(false)}>
              Product
            </a>
            <a className="landing-mobile-nav" href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <span className="landing-mobile-nav">Docs</span>
            <span className="landing-mobile-nav">Blog</span>
            <Link to="/signin" className="landing-mobile-nav" onClick={() => setMenuOpen(false)}>
              Sign in
            </Link>
            <div className="mt-3 flex items-center justify-between border-t border-landing-border pt-4">
              <button onClick={toggleTheme} className="landing-icon-btn" aria-label="Toggle theme">
                {mode === 'dark' ? <Moon /> : <Sun />}
              </button>
              <Button asChild size="sm" className="landing-cta">
                <Link to="/signup">Get early access</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
