import styles from './styles.module.scss'

type SearchProps = {}

export const Search = ({}: SearchProps) => {
  return (
    <form className={styles.search}>
      <label>What do you dare to search?</label>
      <div className={styles.search__container} aria-hidden='true'>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='#765BA8'>
          <use xlinkHref='#search' href='#search' />
        </svg>
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
