'use client'

import { CardsWrapper } from '@/components/organisms/CardsWrapper'
import { Contact } from '@/components/organisms/Contact'
import { Hallmarks } from '@/components/organisms/Hallmarks'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function Home() {
  return (
    <main>
      <MainHeader image='/hero-homescreen.png' />
      <CardsWrapper
        numCardsMobile={2}
        numCardsTablet={4}
        numCardsDesktop={5}
        showButton={true}
      />
      <Contact image='/contact-bg.png' />
      <Hallmarks image='/hallmarks-bg.png' location='home' />
    </main>
  )
}
