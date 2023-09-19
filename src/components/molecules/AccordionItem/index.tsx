'use client'

import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { useState } from 'react'

import styles from './styles.module.scss'

type AccordionItemProps = {
  title: string
  content: string
}

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleToggleAccordion = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  const icon = expanded ? 'minus' : 'plus'

  const fillColor = expanded ? '#765BA8' : '#000706'

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggleAccordion()
    }
  }

  return (
    <article
      className={`${styles.accordionItem} ${
        expanded ? styles.accordionItem__expanded : ''
      }`}
    >
      <div
        onClick={handleToggleAccordion}
        onKeyDown={handleKeyDown}
        role='button'
        tabIndex={0}
        aria-expanded={expanded}
        className={styles.accordionItem__toggle}
      >
        <Text
          align='left'
          children={title}
          color={expanded ? 'purple' : 'black'}
          weight='600-hover'
        />
        <Icon
          icon={icon}
          fill={fillColor}
          className={styles.accordionItem__icon}
        />
      </div>
      {expanded && (
        <div className={styles.accordionItem__answer}>
          <Text align='left' children={content} color='black' />
        </div>
      )}
    </article>
  )
}
