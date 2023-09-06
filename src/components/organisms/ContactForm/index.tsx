'use client'

import { Input } from '@/components/molecules/Input'
import styles from './styles.module.scss'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import contact from '@/data/contact.json'

export const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Headings align='center' children='Summon us' color='white' level='2' />
      <form className={styles.contact__form}>
        {contact.map((item, index) => (
          <Input
            key={index}
            icon={item.icon}
            id={item.id}
            isTextarea={item.isTextarea}
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
          />
        ))}
        <Button label='Submit' level='tertiary' />
      </form>
    </section>
  )
}
