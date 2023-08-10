'use client'
import { BannerQuote } from '@/components/organisms/BannerQuote'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function Blog() {
  return (
    <main>
      <MainHeader image='/hero-blog.png' />
      <BannerQuote image='/bg.png' />
    </main>
  )
}
