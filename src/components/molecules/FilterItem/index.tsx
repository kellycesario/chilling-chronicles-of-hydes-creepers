import styles from './styles.module.scss'

type FilterItemProps = {
  ariaLabel: string
  icon: string
  children: string
}

export const FilterItem = ({ ariaLabel, children, icon }: FilterItemProps) => {
  return (
    <li aria-label={ariaLabel} className={styles.filterItem}>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        className={styles.filterItem__icon}
      >
        <use xlinkHref={`#${icon}`} href={`#${icon}`} />
      </svg>
      {children}
    </li>
  )
}
