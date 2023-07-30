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
  ]
  const combinedClassName = classList.join(' ')

  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={combinedClassName}
        >
          {hasIcon && (
            <svg width='32' height='32' viewBox='0 0 32 32'>
              <use href={`#${icon}`} xlinkHref={`#${icon}`} />
            </svg>
          )}
          {label}
        </button>
      ) : (
        <Link href={href || ''} target={target} className={combinedClassName}>
          {hasIcon && (
            <svg width='32' height='32' viewBox='0 0 32 32'>
              <use href={`#${icon}`} xlinkHref={`#${icon}`} />
            </svg>
          )}
          {label}
        </Link>
      )}
    </>
  )
}
