import { LinkItem } from '@/components/atoms/LinkItem'
import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

import share from '@/data/share.json'

export const Share = () => {
  return (
    <article className={styles.share}>
      <Text align='center' children='Share this on:' color='black' />
      <ul className={styles.share__list}>
        {share.map((item, index) => (
          <LinkItem hasIcon key={index} href={item.href} icon={item.icon} />
        ))}
      </ul>
    </article>
  )
}
