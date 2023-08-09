import styles from './styles.module.scss'

type FilterItemProps = {
  icon: string
  label: string
}

export const FilterItem = ({ icon, label }: FilterItemProps) => {
  return (
    <li
      aria-label={`{ Filter your chronichles by ${label}`}
      className={styles.filterItem}
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        className={styles.filterItem__icon}
      >
        <use xlinkHref={`#${icon}`} href={`#${icon}`} />
      </svg>
      {label}
    </li>
  )
}
