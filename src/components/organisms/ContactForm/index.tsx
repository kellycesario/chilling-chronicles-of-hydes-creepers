'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Input } from '@/components/molecules/Input'
import { Modal } from '@/components/molecules/Modal'
import contact from '@/data/contact.json'
import { useForm as useFormFormspree } from '@formspree/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'

export const ContactForm = () => {
  const {
    handleSubmit: handleSubmitReactHookForm,
    register: registerReactHookForm,
    formState: { errors: errorsReactHookForm },
    reset: resetReactHookForm,
  } = useForm()

  const [state, handleSubmitFormspree] = useFormFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_ID
  )

  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    registerReactHookForm('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })
  }, [registerReactHookForm])

  const handleModalClose = () => {
    setModalVisible(false)
    resetReactHookForm()
  }

  return (
    <section className={styles.contact}>
      <Headings align='center' children='Summon us' color='white' level='2' />
      <form
        className={styles.contact__form}
        onSubmit={(event) => {
          handleSubmitReactHookForm((data) => {})(event)
          handleSubmitFormspree(event)
        }}
      >
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
                errorsReactHookForm[item.id]?.message ||
                (item.id === 'email' &&
                errorsReactHookForm['email']?.type === 'pattern'
                  ? 'Invalid email address'
                  : null)
              }
              validation={item.validation}
              onChange={() => {}}
              onKeyDown={() => {}}
              {...registerReactHookForm(item.id, {
                required: item.validation?.required,
              })}
            />
          </div>
        ))}
        <Button type='submit' label='Submit' level='tertiary' />
      </form>
      {state.succeeded && <Modal onClose={handleModalClose} />}
    </section>
  )
}
