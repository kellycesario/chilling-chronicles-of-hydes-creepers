import { Input } from '../Input'
import styles from './styles.module.scss'

type SearchProps = {}

export const SearchInput = ({}: SearchProps) => {
  return (
    <form className={styles.search}>
      <Input
        icon='search'
        id={''}
        label='What do you dare to search?'
        placeholder='Nightmare quest'
        type='text'
      />
    </form>
  )
}
