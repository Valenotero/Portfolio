import { profile } from '../data/portfolio'

type EmailLinkProps = {
  className?: string
}

export function EmailLink({ className = '' }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${profile.email}`}
      className={`link-email ${className}`.trim()}
    >
      <span className="link-email__stack">
        <span className="link-email__base">{profile.email}</span>
        <span className="link-email__reveal" aria-hidden="true">
          <span className="link-email__reveal-text">{profile.email}</span>
        </span>
      </span>
    </a>
  )
}
