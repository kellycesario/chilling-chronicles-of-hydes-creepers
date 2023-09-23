import { Headings } from '@/components/atoms/Headings'
import { AccordionItem } from '@/components/molecules/AccordionItem'
import styles from './styles.module.scss'

export const Accordion = async ({
  officialSummary,
  sinisterBookInsights,
  notesOnTranslation,
  publicationDate,
  pages,
  isbn,
}) => {
  const accordionTitle = [
    'Official summary',
    'Sinister book insights',
    'Notes on translation',
    'Publication date',
    'Number of pages',
    'ISBN',
  ]

  const accordionProps = [
    officialSummary,
    sinisterBookInsights,
    notesOnTranslation,
    publicationDate,
    pages?.toString(),
    isbn,
  ]

  return (
    <section className={styles.accordion__container}>
      <div className={styles.accordion}>
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
      </div>
    </section>
  )
}
