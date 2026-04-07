import { EmailLink } from './EmailLink'
import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section
      id="contacto"
      className="border-border/60 border-t px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-text text-2xl font-semibold tracking-tight md:text-3xl">
          Contacto
        </h2>
        <p className="text-accent font-mono mt-3 text-sm">04: Siguiente paso</p>
        <div className="border-border bg-surface-2 mt-10 overflow-hidden rounded-2xl border md:flex">
          <div className="from-accent/15 to-violet-dim flex flex-1 flex-col justify-center bg-linear-to-br p-8 md:p-10">
            <p className="text-text text-lg font-medium md:text-xl">
              ¿Tienes un proyecto o una idea?
            </p>
            <p className="text-muted mt-3 max-w-md text-sm leading-relaxed">
              Escríbeme y te respondo en cuanto pueda. También puedes encontrarme
              en redes.
            </p>
          </div>
          <div className="border-border flex flex-1 flex-col justify-center gap-4 border-t p-8 md:border-t-0 md:border-l md:p-10">
            <EmailLink className="text-base" />
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-text text-sm"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-text text-sm"
              >
                GitHub
              </a>
              <a
                href={profile.links.cv}
                className="text-muted hover:text-text text-sm"
              >
                CV / Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
