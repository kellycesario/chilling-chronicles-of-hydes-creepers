import { createElement } from 'react'
import styles from './styles.module.scss'

type HeadingsProps = {
  align: string
  children: string
  color: string
  level: string
}
export const Headings = ({ align, children, color, level }: HeadingsProps) => {
  const classList = [
    styles.headings,
    styles[`headings--${align}`],
    styles[`headings--${color}`],
    styles[`headings--h${level}`],
  ]

  const props = { className: classList.join(' ') }
  const element = createElement('h' + level, props, children)

  return element
}
