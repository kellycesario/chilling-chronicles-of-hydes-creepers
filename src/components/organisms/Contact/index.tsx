'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { useWindowSize } from 'react-use'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';

type ContactProps = {
  image: string
}

export const Contact = ({ image }: ContactProps) => {
  const { width: windowWidth } = useWindowSize()
  const [headingsColor, setHeadingsColor] = useState('');
  const [buttonLevel, setButtonLevel] = useState('');
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    if (windowWidth < 744) {
      setHeadingsColor('white');
      setButtonLevel('tertiary');
      setBackgroundStyle({
        backgroundImage: `url(${image})`,
      });
    } else {
      setHeadingsColor('black');
      setButtonLevel('secondary');
      setBackgroundStyle({});
    }
  }, [windowWidth, image]);

  return (
    <section className={styles.contact}>
      <article
        className={styles.contact__container}
        style={backgroundStyle}
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
