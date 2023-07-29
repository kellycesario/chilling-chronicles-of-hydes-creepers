import { Sprites } from '@/components/ions/Sprites'
import '@/styles/main.scss'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chilling Chronicles of Hydes Creepers',
  description: '',
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
      </body>
    </html>
  )
}
