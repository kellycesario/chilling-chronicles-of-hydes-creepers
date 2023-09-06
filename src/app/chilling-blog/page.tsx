import { BannerQuote } from '@/components/organisms/BannerQuote'
import { Contact } from '@/components/organisms/Contact'
import { MainHeader } from '@/components/organisms/MainHeader'
import { CardsWrapper } from '@/components/organisms/CardsWrapper'

export default function Blog() {
  return (
    <main>
      <MainHeader image='/hero-blog.png' />
      <CardsWrapper
        numCardsMobile={3}
        numCardsTablet={6}
        numCardsDesktop={20}
        showButton={false}
      />
      <BannerQuote image='/bg.png' />
      <Contact image='/contact-bg.png' />
    </main>
  )
}
