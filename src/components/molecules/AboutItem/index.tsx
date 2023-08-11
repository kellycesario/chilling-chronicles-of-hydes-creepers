import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'

import styles from './styles.module.scss'

type AboutItemProps = {
  icon: string
  subtopic: string
  topic: string
}

export const AboutItem = ({ icon, subtopic, topic }: AboutItemProps) => {
  return (
    <div className={styles.aboutItem}>
      <div className={styles.aboutItem__container}>
        <Icon icon={icon} fill='#765BA8' />
        <Text align='left' children={topic} color='black' weight='600' />
      </div>
      <Text align='left' children={subtopic} color='black' />
    </div>
  )
}
