import styles from './styles.module.scss'

import topics from '@/data/topics.json'

type SelectProps = {
  label: string
  image: string
  options?: { value: string; label: string }[]
}

export const Select = ({ label, image, options }: SelectProps) => {
  const background = {
    backgroundImage: `url(${image})`,
  }

  return (
    <div className={styles.select}>
      <label htmlFor='topics' className={styles.select__label}>
        {label}
      </label>
      <select
        id='topics'
        aria-describedby='select a topic to filter the search'
        className={styles.select__dropdown}
        style={background}
      >
        {topics &&
          topics.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  )
}
