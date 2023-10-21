'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any
  }
}

export const Advertising = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className='adsbygoogle'
      style={{
        display: 'block',
        minWidth: 300,
        minHeight: 250,
        overflow: 'hidden',
      }}
      data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
      // data-ad-layout='in-article'
      // data-ad-format='fluid'
      // data-ad-slot='6765860573'
    />
  )
}
