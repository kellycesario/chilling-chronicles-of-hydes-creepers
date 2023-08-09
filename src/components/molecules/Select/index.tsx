import styles from './styles.module.scss'

type SelectProps = {
  label: string
  options?: { value: string; label: string }[]
}

export const Select = ({ label, options }: SelectProps) => {
  return (
    <div className={styles.select}>
      <label htmlFor='topics' className={styles.select__label}>
        {label}
      </label>
      <select
        id='topics'
        aria-describedby='select a topic to filter the search'
        className={styles.select__dropdown}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  )
}
