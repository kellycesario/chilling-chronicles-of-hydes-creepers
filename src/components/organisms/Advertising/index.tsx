'use client'
import styles from './styles.module.scss';
import Script from 'next/script';

export const Advertising = () => {
  const scriptContent = `(adsbygoogle = window.adsbygoogle || []).push({});`;

  return (
    <section className={styles.advertising}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block', minWidth: 300, minHeight: 250 }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
        data-ad-slot='6765860573'
      ></ins>
      <Script dangerouslySetInnerHTML={{ __html: scriptContent }} />
    </section>
  );
};
