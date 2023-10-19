'use client'

import * as gtag from '@/utils/gtag'
import Script from 'next/script'

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        crossOrigin='anonymous'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        crossOrigin='anonymous'
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
        }}
      />
    </>
  )
}
