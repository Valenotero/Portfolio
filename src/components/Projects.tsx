import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section
      id="proyectos"
      className="border-border/60 border-t px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-text text-2xl font-semibold tracking-tight md:text-3xl">
          Proyectos
        </h2>
        <p className="text-accent font-mono mt-3 text-sm">03: Selección</p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <li key={project.title} className="group relative">
              <div
                className="from-accent/30 pointer-events-none absolute -inset-0.5 rounded-2xl bg-linear-to-br via-violet/10 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
                aria-hidden
              />
              <div className="border-border bg-surface-2 relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-accent/30 group-hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(94,234,212,0.06)] group-focus-within:-translate-y-1.5 group-focus-within:border-accent/30 group-focus-within:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(94,234,212,0.06)]">
                <div
                  className="via-accent/70 absolute top-0 right-8 left-8 h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  aria-hidden
                />
                <h3 className="text-text text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted mt-3 grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="text-muted border-border group-hover:border-accent/20 group-focus-within:border-accent/20 inline-flex rounded-md border bg-bg/40 px-2 py-0.5 font-mono text-xs transition-colors duration-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg from-accent shadow-accent/25 hover:shadow-accent/40 active:scale-[0.97] inline-flex items-center gap-2 rounded-full bg-linear-to-r to-teal-300 px-4 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
                  >
                    Demo
                    <svg
                      className="h-3.5 w-3.5 opacity-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border text-muted hover:border-violet/50 hover:bg-violet-dim hover:text-text active:scale-[0.97] inline-flex items-center gap-2 rounded-full border border-dashed bg-bg/40 px-4 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-solid hover:shadow-[0_0_24px_-8px_rgba(167,139,250,0.45)]"
                  >
                    Código
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
