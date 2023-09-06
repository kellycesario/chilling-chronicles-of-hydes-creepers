import { Icon } from '@/components/atoms/Icon'
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
      <a href={href} aria-label={icon ? `Share this on ${icon}` : undefined} className={styles.link}>
        <Icon icon={icon} fill='#000706' />
      </a>
    ) : (
      <Link href={href} className={styles.link}>{children}</Link>
    )}
  </li>
)
