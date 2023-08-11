import { Icon } from '@/components/atoms/Icon'
import styles from './styles.module.scss'

type SearchProps = {}

export const Search = ({}: SearchProps) => {
  return (
    <form className={styles.search}>
      <label>What do you dare to search?</label>
      <div className={styles.search__container} aria-hidden='true'>
        <Icon icon='search' fill='#765BA8' />
        <input
          placeholder='Nightmare quest'
          type='submit'
          className={styles.search__input}
          value='Nightmare quest'
        />
      </div>
    </form>
  )
}
