import Link from 'next/link'
import styles from './styles.module.scss'

type LinkItemProps = {
  children: string
  href: string
}

export const LinkItem = ({ children, href }: LinkItemProps) => {
  return (
    <li className={styles.link}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
