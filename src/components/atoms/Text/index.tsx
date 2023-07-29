import styles from './styles.module.scss'

type TextProps = {
  align: string
  children: string
  color: string
}
export const Text = ({ align, children, color }: TextProps) => {
  const classList = [styles[`text`], styles[`text--${align}`], styles[`text--${color}`]]

  return <p className={classList.join(' ')}>{children}</p>
}
