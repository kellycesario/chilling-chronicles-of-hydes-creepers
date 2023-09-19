import { BannerQuote } from '@/components/organisms/BannerQuote'
import { CardsWrapper } from '@/components/organisms/CardsWrapper'
import { Contact } from '@/components/organisms/Contact'
import { MainHeader } from '@/components/organisms/MainHeader'

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
