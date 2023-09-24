import { Icon } from '@/components/atoms/Icon'
import styles from './styles.module.scss'

type FilterItemProps = {
  icon: string
  label: string
  value: string
}

export const FilterItem = ({ icon, label, value }: FilterItemProps) => {
  return (
    <li
      aria-label={`{ Filter your chronichles by ${value}`}
      className={styles.filterItem}
    >
      <Icon icon={icon} className={styles.filterItem__icon} />
      {label}
    </li>
  )
}
