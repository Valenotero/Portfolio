import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-border/60 text-muted border-t px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p>
          © {year} {profile.name}.
        </p>
        <a href="#inicio" className="hover:text-text transition-colors">
          Volver arriba
        </a>
      </div>
    </footer>
  )
}
