import Link from 'next/link'
import styles from './styles.module.scss'

type ButtonProps = {
  children?: string
  className?: string
  href?: string
  icon?: string
  isButton?: boolean
  hasIcon?: boolean
  level?: string
  onClick?: () => void
  reset?: boolean
  target?: string
}

export const Button = ({
  children,
  className = '',
  href,
  isButton = true,
  hasIcon = false,
  icon,
  level,
  onClick,
  reset,
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
          className={reset ? className : combinedClassName}
        >
          {hasIcon && (
            <svg width='32' height='32' viewBox='0 0 32 32'>
              <use href={`#${icon}`} xlinkHref={`#${icon}`} />
            </svg>
          )}
          {children}
        </button>
      ) : (
        <Link href={href || ''} target={target} className={combinedClassName}>
          {hasIcon && (
            <svg width='32' height='32' viewBox='0 0 32 32' fill='purple'>
              <use href={`#${icon}`} xlinkHref={`#${icon}`} />
            </svg>
          )}
          {children}
        </Link>
      )}
    </>
  )
}
