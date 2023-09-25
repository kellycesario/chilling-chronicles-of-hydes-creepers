'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type ContactProps = {
  image: string
}

export const Contact = ({ image }: ContactProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const background = {
    backgroundImage: `url(${image})`,
  }

  const headingsColor = windowWidth < 744 ? 'white' : 'black'
  const buttonLevel = windowWidth < 744 ? 'tertiary' : 'secondary'

  return (
      <section className={styles.contact}>
        <article
          style={windowWidth < 744 ? background : {}}
          className={styles.contact__container}
        >
          <Headings
            align='left'
            children='Creepy reviews in your inbox'
            color={headingsColor}
            level='4'
          />
          <Text
            align='left'
            children='Unleash your darkest questions or eerie curiosities by communing with our spectral agents'
            color={headingsColor}
          />
          <Button
            href='/summon-us'
            isButton={false}
            label='Summon us'
            level={buttonLevel}
            target='_self'
          />
        </article>
        <Image
          src={image}
          alt={''}
          width={1920}
          height={1500}
          className={styles.contact__image}
        />
      </section>
  )
}
