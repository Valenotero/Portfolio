import { useRef } from 'react'
import { skills } from '../data/portfolio'

/** Más grados + perspectiva más cercana + lift/scale = efecto 3D más notorio */
const maxTiltDeg = 22
const chipPerspectivePx = 560
const hoverLiftZ = 38
const hoverScale = 1.09

function SkillChip({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  const restTransform = `perspective(${chipPerspectivePx}px) rotateX(0deg) rotateY(0deg) translateZ(0) scale3d(1,1,1)`

  function applyTilt(clientX: number, clientY: number) {
    const el = ref.current
    if (!el) return
    el.style.transition = ''
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const tiltY = ((x / rect.width) * 2 - 1) * maxTiltDeg
    const tiltX = ((y / rect.height) * 2 - 1) * -maxTiltDeg
    el.style.transform = `perspective(${chipPerspectivePx}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${hoverLiftZ}px) scale3d(${hoverScale},${hoverScale},${hoverScale})`
  }

  return (
    <li className="[perspective:720px]">
      <span
        ref={ref}
        onPointerMove={(e) => applyTilt(e.clientX, e.clientY)}
        onPointerEnter={(e) => applyTilt(e.clientX, e.clientY)}
        onPointerLeave={() => {
          const el = ref.current
          if (!el) return
          el.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)'
          el.style.transform = restTransform
          const onEnd = (ev: TransitionEvent) => {
            if (ev.propertyName !== 'transform') return
            el.style.transition = ''
            el.removeEventListener('transitionend', onEnd)
          }
          el.addEventListener('transitionend', onEnd)
        }}
        className="border-border from-surface-2 to-bg/60 text-text hover:border-accent/45 hover:from-surface-2 hover:to-accent/5 inline-flex cursor-default select-none rounded-2xl border bg-linear-to-br px-4 py-2.5 font-mono text-sm transition-[border-color,background-color] duration-300 ease-out [transform-style:preserve-3d] will-change-transform"
      >
        {label}
      </span>
    </li>
  )
}

export function Skills() {
  return (
    <section
      id="habilidades"
      className="border-border/60 border-t bg-surface/40 px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-text text-2xl font-semibold tracking-tight md:text-3xl">
          Stack y habilidades
        </h2>
        <p className="text-accent font-mono mt-3 text-sm">02: Tecnologías</p>
        <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">
          Herramientas que uso en proyectos full stack: front con React y Next.js,
          HTML y CSS (SCSS y Tailwind), backend con Node y Java, datos con SQL y
          APIs REST, más Figma y Postman.
        </p>
        <ul className="mt-10 flex flex-wrap gap-4 md:gap-5">
          {skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </ul>
      </div>
    </section>
  )
}
