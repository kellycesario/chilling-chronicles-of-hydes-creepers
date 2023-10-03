import { Sprites } from '@/components/ions/Sprites'
import { Footer } from '@/components/organisms/Footer'
import '@/styles/main.scss'
import { GoogleAnalytics } from '@/utils/GoogleAnalytics'
import { Hotjar } from '@/utils/Hotjar'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
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
        <GoogleAnalytics />
        <Hotjar />
      </body>
    </html>
  )
}
