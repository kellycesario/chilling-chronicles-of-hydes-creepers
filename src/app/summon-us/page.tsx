'use client'

import { BannerQuote } from '@/components/organisms/BannerQuote'
import { ContactForm } from '@/components/organisms/ContactForm'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function Summon() {
  return (
    <main>
      <MainHeader image='/hero-summon.png' />
      <ContactForm />
      <BannerQuote image='/bg.png' />
    </main>
  )
}
