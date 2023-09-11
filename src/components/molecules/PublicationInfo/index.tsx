import { Text } from '@/components/atoms/Text'
import { format } from 'date-fns'
import styles from './styles.module.scss'

type PublicationInfoProps = {
  reviewer: string
  date: string
}

export const PublicationInfo = ({ reviewer, date }: PublicationInfoProps) => {
  const parsedDate = new Date(date)
  const formattedDate = format(parsedDate, 'MMMM d, yyyy')

  return (
    <article className={styles.info}>
      <div className={styles.info__container}>
        <Text align='left' weight='600' children='Posted by:' />
        <Text align='left' children={reviewer} />
      </div>
      <div className={styles.info__container}>
        <Text align='left' weight='600' children='Date of publication:' />
        <Text align='left' children={formattedDate} />
      </div>
    </article>
  )
}
