import { Icon } from '@/components/atoms/Icon'
import { LinkItem } from '@/components/atoms/LinkItem'
import { Text } from '@/components/atoms/Text'
import navigation from '@/data/navigation.json'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footer__list}>
          {navigation.map((item, index) => (
            <LinkItem
              key={index}
              children={item.children}
              href={item.href}
              flexDirection='center'
            />
          ))}
        </ul>
      </nav>

      <div className={styles.footer__credits}>
        <Text align='left' children='Made with' color='black' />
        <Icon icon='ghost' fill='#765BA8' />
        <Text align='left' children='for chilling people' color='black' />
      </div>

      <div className={styles.footer__copyright}>
        <Text
          align='center'
          children="This website is non-profit and is not affiliated with the author Edgar J. Hyde, nor does it claim any rights to the 'Creepers' saga"
          size='small'
        />
      </div>
    </footer>
  )
}
