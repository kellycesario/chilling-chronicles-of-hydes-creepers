'use client'
import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

type LinkItemProps = {
  children?: React.ReactNode
  href?: string
  hasIcon?: boolean
  icon?: string
  flexDirection?: string
}

export const LinkItem = ({
  children,
  href,
  hasIcon,
  icon,
  flexDirection,
}: LinkItemProps) => {
  const pathname = usePathname()

  const classList = [
    styles.link,
    flexDirection === 'center' && styles['link--center'],
    flexDirection === 'end' && styles['link--end'],
  ].filter(Boolean).join(' ');

  return (
    <li className={classList}>
      {hasIcon ? (
        <a
          href={href}
          aria-label={icon ? `Share this on ${icon}` : undefined}
          className={classList}
        >
          <Icon icon={icon} fill='#000706' />
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className={pathname === href ? `${styles['link--active']}` : ''}
        >
          {children}
        </Link>
      )}
    </li>
  )
}
