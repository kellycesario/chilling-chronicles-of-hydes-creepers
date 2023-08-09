import styles from './styles.module.scss'

type InputProps = {
  icon: string
  id: string
  isTextarea?: boolean
  label: string
  placeholder: string
  type: string
}
export const Input = ({
  icon,
  id,
  isTextarea = false,
  label,
  placeholder,
  type,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className={styles.input__label}>
        {' '}
        {label}
      </label>
      <div className={styles.input} aria-hidden='true'>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='#765BA8'>
          <use xlinkHref={`#${icon}`} href={`#${icon}`} />
        </svg>
        {isTextarea ? (
          <textarea
            className={styles.input__field}
            id={id}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={styles.input__field}
            type={type}
            id={id}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  )
}