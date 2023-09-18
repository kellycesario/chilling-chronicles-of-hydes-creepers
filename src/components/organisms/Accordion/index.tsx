import { Headings } from '@/components/atoms/Headings'
import { AccordionItem } from '@/components/molecules/AccordionItem'
import { fetchExtra } from '@/contentful/additionalInformationPosts'
import { draftMode } from 'next/headers'
import styles from './styles.module.scss'

export const Accordion = async ({ additionalInformation }) => {
  console.log('additionalInformation:', additionalInformation)

  additionalInformation = await fetchExtra({
    isbn: additionalInformation?.isbn,
    preview: draftMode().isEnabled,
  })

  if (!additionalInformation) {
    console.error('Additional information is null or undefined.')
    return null
  }

  const accordionTitle = [
    'Official summary',
    'Sinister book insights',
    'Notes on translation',
    'Publication date',
    'Number of pages',
    'ISBN',
  ]

  const accordionProps = [
    additionalInformation?.officialSummary || '',
    additionalInformation?.sinisterBookInsights || '',
    additionalInformation?.notesOnTranslation || '',
    additionalInformation?.publicationDate || '',
    additionalInformation?.pages?.toString() || '',
    additionalInformation?.isbn || '',
  ]

  return (
    <section className={styles.accordion}>
      <Headings
        align='left'
        children='Whispers from the Crypt'
        color='purple'
        level='3'
      />
      <div className={styles.accordion__items}>
        {accordionProps.map((content, index) => (
          <AccordionItem
            key={index}
            title={accordionTitle[index]}
            content={content}
          />
        ))}
      </div>
    </section>
  )
}
