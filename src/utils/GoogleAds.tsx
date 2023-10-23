'use client'

export const GoogleAds = () => {
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
      crossOrigin='anonymous'
    ></script>
  )
}
