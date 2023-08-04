import styles from './styles.module.scss'

type TagProps = {
  author: string
}

export const Tag = ({ author }: TagProps) => {
  return (
    <div className={styles.tag}>
      <p className={styles.tag__author}>{author}</p>
    </div>
  )
}
