import { Advertising } from '@/components/organisms/Advertising'
import { BannerQuote } from '@/components/organisms/BannerQuote'
import { ContactForm } from '@/components/organisms/ContactForm'
import { MainHeader } from '@/components/organisms/MainHeader'

export default function Summon() {
  return (
    <main>
      <MainHeader image='/hero-summon.png' />
      <ContactForm />
      <Advertising
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot='6765860573'
      />
      <BannerQuote image='/bg.png' />
    </main>
  )
}
