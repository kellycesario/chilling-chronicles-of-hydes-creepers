import { Icon } from '@/components/atoms/Icon'
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
        <Icon icon={icon} fill='#765BA8' />
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
