import { EmailLink } from './EmailLink'
import { profile } from '../data/portfolio'

export function About() {
  return (
    <section
      id="sobre-mi"
      className="border-border/60 border-t px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-text text-2xl font-semibold tracking-tight md:text-3xl">
          Sobre mí
        </h2>
        <p className="text-accent font-mono mt-3 text-sm">01: Introducción</p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <p className="text-muted text-lg leading-relaxed">{profile.about}</p>
          <div className="border-border bg-surface-2 rounded-2xl border p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted font-mono text-xs uppercase">
                  Ubicación
                </dt>
                <dd className="text-text mt-1 font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted font-mono text-xs uppercase">Email</dt>
                <dd className="mt-1">
                  <EmailLink />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
