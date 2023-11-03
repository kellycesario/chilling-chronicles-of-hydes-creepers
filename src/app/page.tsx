import { Advertising } from '@/components/organisms/Advertising'
import { CardsWrapper } from '@/components/organisms/CardsWrapper'
import { Contact } from '@/components/organisms/Contact'
import { Hallmarks } from '@/components/organisms/Hallmarks'
import { MainHeader } from '@/components/organisms/MainHeader'
import { fetchChronicles } from '@/services/contentful/chroniclePosts'
import { draftMode } from 'next/headers'

interface ChronicleParams {
  slug: string
}

export async function generateStaticParams(): Promise<ChronicleParams[]> {
  const chronicles = await fetchChronicles({
    preview: false,
  })

  return chronicles.map((post) => ({ slug: post.slug }))
}

async function Home() {
  const chronicles = await fetchChronicles({
    preview: draftMode().isEnabled,
  })

  return (
    <main>
      <MainHeader image='/hero-homescreen.png' />
      <CardsWrapper
        numCardsMobile={2}
        numCardsTablet={4}
        numCardsDesktop={5}
        showButton={true}
        chronicle={chronicles}
      />
      <Advertising
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot='6765860573'
      />
      <Contact image='/contact-bg.png' />
      <Advertising
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot='6765860573'
      />
      <Hallmarks image='/hallmarks-bg.png' location='home' />
    </main>
  )
}

export default Home
