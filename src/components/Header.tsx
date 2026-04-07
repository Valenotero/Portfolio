import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const nav = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-border/80 border-b bg-bg/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="text-muted hover:text-accent flex items-center gap-2 font-mono text-sm tracking-tight transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {profile.photoSrc ? (
            <img
              src={profile.photoSrc}
              alt=""
              width={28}
              height={28}
              decoding="async"
              className="border-border size-7 rounded-full border object-cover"
            />
          ) : null}
          <span>&lt;dev /&gt;</span>
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted hover:text-text text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="text-muted hover:text-text border-border rounded-lg border px-3 py-2 font-mono text-xs md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? 'Cerrar' : 'Menú'}
          </button>
          <a
            href="#contacto"
            className="border-border bg-surface-2 text-text hover:border-accent/50 hover:bg-accent-dim hidden rounded-full border px-4 py-2 text-sm font-medium transition-all sm:inline-flex"
            onClick={() => setMenuOpen(false)}
          >
            Hablemos
          </a>
        </div>
      </div>
      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-border bg-bg/98 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t px-5 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text text-base font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="text-accent mt-2 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos →
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
