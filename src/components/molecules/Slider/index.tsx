import { Text } from '@/components/atoms/Text'
import hallmarks from '@/data/hallmarks.json'
import { useState } from 'react'
import styles from './styles.module.scss'

type SliderProps = {
  id: number
  text: string
}

export const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1)

  const changeSlide = (slideNumber: number) => {
    setActiveSlide(slideNumber)
  }

  return (
    <article className={styles.slider}>
      <div className={styles.slider__container}>
        {hallmarks.map((item) => (
          <div key={item.id} className={styles.slider__item}>
            {activeSlide === item.id && <img src='/divider.png' alt=''/>}
            <button
              className={`${styles.slider__button} ${
                activeSlide === item.id ? styles.slider__buttonActive : ''
              }`}
              onClick={() => changeSlide(item.id)}
            >
              {item.id}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.slider__text}>
        {hallmarks.map((hallmark: SliderProps) =>
          activeSlide === hallmark.id ? (
            <Text
              align='left'
              color='white'
              children={hallmark.text}
              key={hallmark.id}
            />
          ) : null
        )}
      </div>
    </article>
  )
}
