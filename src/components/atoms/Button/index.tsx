import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'

type ButtonProps = {
  className?: string
  href?: string
  icon?: string
  isButton?: boolean
  hasIcon?: boolean
  label?: string
  level?: string
  onClick?: () => void
  target?: string
  type?: string
}

export const Button = ({
  className = '',
  href,
  isButton = true,
  hasIcon = false,
  icon,
  label,
  level,
  onClick,
  target,
}: ButtonProps) => {
  const classList = [
    styles.button,
    styles[`button--${level}`],
    hasIcon ? styles.button__icon : '',
    className,
  ].join(' ')

  return (
    <>
      {isButton ? (
        <button onClick={onClick} className={classList}>
          {hasIcon && <Icon icon={icon} />}
          {label}
        </button>
      ) : (
        <Link href={href || ''} target={target} className={classList}>
          {hasIcon && <Icon icon={icon} />}
          {label}
        </Link>
      )}
    </>
  )
}
