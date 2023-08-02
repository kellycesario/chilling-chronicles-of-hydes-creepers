import { Headings } from '@/components/atoms/Headings'
import { AccordionItem } from '@/components/molecules/AccordionItem'
import accordionData from '@/data/accordion.json'
import styles from './styles.module.scss'

export const Accordion = () => {
  return (
    <section className={styles.accordion}>
      <Headings
        align='left'
        children='Whispers from the Crypt'
        color='purple'
        level='3'
      />
      <div className={styles.accordion__items}>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  )
}
