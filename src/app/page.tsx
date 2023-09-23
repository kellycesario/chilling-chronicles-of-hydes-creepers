import { CardsWrapper } from '@/components/organisms/CardsWrapper'
import { Contact } from '@/components/organisms/Contact'
import { Hallmarks } from '@/components/organisms/Hallmarks'
import { MainHeader } from '@/components/organisms/MainHeader'
import { fetchChronicles } from '@/contentful/chroniclePosts'
import { draftMode } from 'next/headers'

interface ChronicleParams {
  slug: string
}

interface ChronicleProps {
  params: ChronicleParams
}

export async function generateStaticParams(): Promise<ChronicleParams[]> {
  const chronicles = await fetchChronicles({
    preview: false,
  })

  return chronicles.map((post) => ({ slug: post.slug }))
}

async function Home({}: ChronicleProps) {
  const chronicles = await fetchChronicles({
    preview: draftMode().isEnabled,
  })

  console.log('teste:', chronicles)

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
      <Contact image='/contact-bg.png' />
      <Hallmarks image='/hallmarks-bg.png' location='home' />
    </main>
  )
}

export default Home
