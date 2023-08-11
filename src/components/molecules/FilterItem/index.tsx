import { Icon } from '@/components/atoms/Icon'
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
      <Icon icon={icon} className={styles.filterItem__icon} />
      {label}
    </li>
  )
}
