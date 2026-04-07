import { profile } from '../data/portfolio'
import { HeroPhoto } from './HeroPhoto'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-visible px-5 pt-28 pb-24 md:px-8 md:pt-36 md:pb-32"
    >
      <div
        className="bg-accent pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[100px] glow-orb"
        aria-hidden
      />
      <div
        className="bg-violet pointer-events-none absolute top-20 right-[-120px] h-[280px] w-[280px] rounded-full opacity-[0.1] blur-[90px] glow-orb"
        style={{ animationDelay: '1s' }}
        aria-hidden
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="order-2 w-full min-w-0 max-w-2xl lg:order-1">
            <p className="text-accent animate-fade-up font-mono text-sm tracking-wide uppercase">
              Portfolio
            </p>
            <h1 className="animate-fade-up-delay-1 mt-4 text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
              Hola, soy{' '}
              <span className="from-accent to-violet bg-linear-to-r bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-muted animate-fade-up-delay-2 mt-3 text-lg font-medium md:text-xl">
              {profile.role}
            </p>
            <p className="text-muted animate-fade-up-delay-3 mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {profile.tagline}
            </p>
            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="from-accent/90 to-accent text-bg inline-flex items-center justify-center rounded-full bg-linear-to-r px-6 py-3 text-sm font-semibold shadow-[0_0_28px_-4px_rgba(94,234,212,0.45)] transition hover:brightness-110"
              >
                Ver proyectos
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="border-border bg-surface hover:border-accent/40 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <HeroPhoto className="order-1 shrink-0 lg:order-2" />
        </div>
      </div>
    </section>
  )
}
