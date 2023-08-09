import Link from 'next/link'
import styles from './styles.module.scss'

type LinkItemProps = {
  children?: React.ReactNode
  href?: string
  hasIcon?: boolean
  icon?: string
}

export const LinkItem = ({ children, href, hasIcon, icon }: LinkItemProps) => (
  <li className={styles.link}>
    {hasIcon ? (
      <a href={href} aria-label={icon ? `Share this on ${icon}` : undefined}>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='#000706'>
          <use xlinkHref={`#${icon}`} href={`#${icon}`} />
        </svg>
      </a>
    ) : (
      <Link href={href}>{children}</Link>
    )}
  </li>
)
