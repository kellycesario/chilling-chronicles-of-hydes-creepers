'use client'

import { BannerQuote } from '@/components/organisms/BannerQuote'
import { Contact } from '@/components/organisms/Contact'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function Summon() {
  return (
    <main>
      <MainHeader image='/hero-summon.png' />
      <Contact />
      <BannerQuote image='/bg.png' />
    </main>
  )
}
