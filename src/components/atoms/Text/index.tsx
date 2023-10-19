import styles from './styles.module.scss'

type TextProps = {
  align: string
  children: string
  color?: string
  weight?: string
  size?:string
}
export const Text = ({ align, children, color, weight, size }: TextProps) => {
  const classList = [
    styles[`text`],
    styles[`text--${align}`],
    styles[`text--${color}`],
    styles[`text--${weight}`],
    styles[`text--${size}`],
  ].join(' ')

  return <p className={classList}>{children}</p>
}
