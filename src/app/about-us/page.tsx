'use client'

import { Authors } from '@/components/organisms/Authors'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function About() {
  return (
    <main>
      <MainHeader image='/hero-about.png' />
      <Authors />
    </main>
  )
}
