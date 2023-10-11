import { LinkItem } from '@/components/atoms/LinkItem'
import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

type ShareProps = {
  slug: string
}

export const Share = ({ slug }: ShareProps) => {
  const shareLinks = [
    {
      icon: 'facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchilling-chronicles-of-hydes-creepers.vercel.app%2Fchilling-blog%2F${slug}`,
    },
    {
      icon: 'twitter',
      href: `https://twitter.com/intent/tweet?text=https%3A%2F%2Fchilling-chronicles-of-hydes-creepers.vercel.app%2Fchilling-blog%2F${slug}`,
    },
    {
      icon: 'linkedin',
      href: `https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fchilling-chronicles-of-hydes-creepers.vercel.app%2Fchilling-blog%2F${slug}`,
    },
  ]

  return (
    <article className={styles.share}>
      <Text align='center' children='Share this on:' color='black' />
      <ul className={styles.share__list}>
        {shareLinks.map((item, index) => (
          <LinkItem
            hasIcon
            key={index}
            href={item.href}
            icon={item.icon}
            flexDirection='center'
          />
        ))}
      </ul>
    </article>
  )
}
