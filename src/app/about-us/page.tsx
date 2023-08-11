'use client'

import { AboutUs } from '@/components/organisms/AboutUs'
import { Authors } from '@/components/organisms/Authors'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function About() {
  return (
    <main>
      <MainHeader image='/hero-about.png' />
      <AboutUs />
      <Authors />
    </main>
  )
}
