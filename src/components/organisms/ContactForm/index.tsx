'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Input } from '@/components/molecules/Input'
import contact from '@/data/contact.json'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form data submitted:', data)
  }

  useEffect(() => {
    register('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })
  }, [register])

  return (
    <section className={styles.contact}>
      <Headings align='center' children='Summon us' color='white' level='2' />
      <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
        {contact.map((item, index) => (
          <div key={index} className={styles.inputContainer}>
            <Input
              icon={item.icon}
              id={item.id}
              isTextarea={item.isTextarea}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              error={
                errors[item.id]?.message ||
                (item.id === 'email' && errors['email']?.type === 'pattern'
                  ? 'Invalid email address'
                  : null)
              }
              validation={item.validation}
              onChange={() => {}}
              onKeyDown={() => {}}
              {...register(item.id, { required: item.validation?.required })}
            />
          </div>
        ))}
        <Button type='submit' label='Submit' level='tertiary' />
      </form>
    </section>
  )
}
