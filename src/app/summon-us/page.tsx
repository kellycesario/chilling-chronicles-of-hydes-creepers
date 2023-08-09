'use client'

import { BannerQuote } from '@/components/organisms/BannerQuote'
import { Contact } from '@/components/organisms/Contact'

export default function Summon() {
  return (
    <section>
      <Contact />
      <BannerQuote image='/bg.png' />
    </section>
  )
}
