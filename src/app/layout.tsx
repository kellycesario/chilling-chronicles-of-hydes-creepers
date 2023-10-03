import { Sprites } from '@/components/ions/Sprites'
import { Footer } from '@/components/organisms/Footer'
import '@/styles/main.scss'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chilling Chronicles of Hydes Creepers',
  description:
    "Explore chilling and mysterious stories on 'Chilling Chronicles of Hydes Creepers' blog. Dive into suspenseful narratives, eerie encounters, and enigmatic events, delivering thrilling content for mystery enthusiasts",
  icons: {
    icon: '/favicon.png',
  },
  themeColor: '#765ba8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={openSans.className}>
      <body>
        {children}
        <Sprites />
        <Footer />
      </body>
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3676533,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
        }}
      />
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-S33WWE2401');
`,
        }}
      />
    </html>
  )
}
