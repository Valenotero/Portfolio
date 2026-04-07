import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const COLS = 6
const ROWS = 6

type ShardMotion = {
  x: number
  y: number
  z: number
  rx: number
  ry: number
  rz: number
}

function randomShardMotions(count: number): ShardMotion[] {
  return Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 90,
    y: (Math.random() - 0.5) * 90,
    z: (Math.random() - 0.5) * 140,
    rx: (Math.random() - 0.5) * 56,
    ry: (Math.random() - 0.5) * 56,
    rz: (Math.random() - 0.5) * 38,
  }))
}

type HeroPhotoProps = {
  className?: string
}

export function HeroPhoto({ className = '' }: HeroPhotoProps) {
  const [broken, setBroken] = useState(false)
  const [motion, setMotion] = useState(false)
  const [shards, setShards] = useState<ShardMotion[] | null>(null)
  const [imgFailed, setImgFailed] = useState(false)

  const src = profile.photoSrc
  const showPhoto = Boolean(src && !imgFailed)

  useEffect(() => {
    if (!broken) {
      setMotion(false)
      return
    }
    const t = window.setTimeout(() => setMotion(true), 40)
    return () => window.clearTimeout(t)
  }, [broken])

  if (!showPhoto) return null

  const toggle = () => {
    if (broken) {
      setBroken(false)
      setShards(null)
    } else {
      setShards(randomShardMotions(ROWS * COLS))
      setBroken(true)
    }
  }

  const wPct = COLS * 100
  const hPct = ROWS * 100

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={broken}
      aria-label={broken ? 'Restaurar foto' : 'Romper foto'}
      className={`group border-border bg-surface focus-visible:ring-accent relative aspect-square w-[min(100%,280px)] shrink-0 cursor-pointer rounded-2xl border shadow-[0_0_0_1px_rgba(0,0,0,0.2)_inset] transition-[box-shadow] focus-visible:ring-2 focus-visible:outline-none ${broken ? 'overflow-visible' : 'overflow-hidden'} ${className}`}
    >
      {!broken ? (
        <img
          src={src}
          alt=""
          width={560}
          height={560}
          decoding="async"
          onError={() => setImgFailed(true)}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="grid size-full"
          style={{
            perspective: '1000px',
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
            transformStyle: 'preserve-3d',
          }}
        >
          {Array.from({ length: ROWS * COLS }, (_, k) => {
            const j = k % COLS
            const i = Math.floor(k / COLS)
            const m = shards?.[k]
            const t3d =
              motion && m
                ? `translate3d(${m.x}px, ${m.y}px, ${m.z}px) rotateX(${m.rx}deg) rotateY(${m.ry}deg) rotateZ(${m.rz}deg)`
                : 'translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0)'

            return (
              <div key={k} className="relative min-h-0 min-w-0">
                <div
                  className="absolute inset-0 overflow-hidden rounded-[1px] transition-[transform] duration-[650ms] ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: t3d,
                    backfaceVisibility: 'visible',
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    decoding="async"
                    className="pointer-events-none absolute max-w-none object-cover"
                    style={{
                      width: `${wPct}%`,
                      height: `${hPct}%`,
                      left: `${-j * 100}%`,
                      top: `${-i * 100}%`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </button>
  )
}
