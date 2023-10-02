'use client'

import { Icon } from '@/components/atoms/Icon'
import styles from './styles.module.scss'

import React, { ReactNode, Ref, forwardRef } from 'react'
import { FieldError, FieldErrors, Merge } from 'react-hook-form'

export type ErrorType = {
  message: string
}

type ValidationType = {
  required: string
}

type InputProps = {
  icon: string
  id: string
  isTextarea?: boolean
  label: string
  placeholder: string
  type: string
  value?: string
  error?:
    | FieldError
    | FieldErrors<any>
    | ErrorType
    | string
    | Merge<FieldError, FieldErrors<any>>
  validation?: ValidationType
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = forwardRef(
  (
    {
      icon,
      id,
      isTextarea = false,
      label,
      placeholder,
      type,
      value,
      onChange,
      onKeyDown,
      error,
      validation,
      ...rest
    }: InputProps,
    ref?: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let errorMessage: ReactNode = null
    let errorIcon = icon
    let errorIconColor = '#765BA8'

    if (error) {
      if (typeof error === 'string') {
        errorMessage = error
        errorIcon = 'close'
        errorIconColor = 'purple'
      } else if ((error as FieldError).type) {
        errorMessage = (error as FieldError).message
        errorIcon = 'close'
        errorIconColor = '#urple'
      } else if ((error as ErrorType).message) {
        errorMessage = (error as ErrorType).message
        errorIcon = 'close'
        errorIconColor = 'purple'
      }
    }

    return (
      <>
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>

        {validation && error && (
          <span className={styles.input__validation}>
            {validation.required}
          </span>
        )}

        <div className={styles.input}>
          <Icon icon={errorIcon} fill={errorIconColor} />
          {isTextarea ? (
            <textarea
              className={`${styles.input__field} ${
                error ? styles['inputfield--error'] : ''
              }`}
              id={id}
              placeholder={placeholder}
              ref={ref as Ref<HTMLTextAreaElement>}
              {...rest}
            />
          ) : (
            <input
              className={`${styles.input__field} ${
                error ? styles['inputfield--error'] : ''
              }`}
              ref={ref as Ref<HTMLInputElement>}
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              {...rest}
            />
          )}
        </div>
      </>
    )
  }
)
