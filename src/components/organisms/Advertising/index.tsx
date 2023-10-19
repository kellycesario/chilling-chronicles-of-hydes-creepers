import styles from './styles.module.scss'

export const Advertising = () => {
  return (
    <section className={styles.advertising}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
        data-ad-slot='6765860573'
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </section>
  )
}
