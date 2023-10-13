'use client'

import Script from 'next/script'

export const GoogleAds = () => {
  return (
    <Script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1625131920385817'
      crossOrigin='anonymous'
    />
  )
}
