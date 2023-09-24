import { SearchInput } from '@/components/molecules/SearchInput'
import { Filter } from '@/components/organisms/Filter'
import styles from './styles.module.scss'

export const Search = () => {
  return (
    <section className={styles.search}>
      <SearchInput />
      <Filter />
    </section>
  )
}
