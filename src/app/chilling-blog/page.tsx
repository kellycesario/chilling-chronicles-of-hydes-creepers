import { BannerQuote } from '@/components/organisms/BannerQuote'
import { CardsWrapper } from '@/components/organisms/CardsWrapper'
import { Contact } from '@/components/organisms/Contact'
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

async function Blog({ }: ChronicleProps) {
  const chronicles = await fetchChronicles({
    preview: draftMode().isEnabled,
  })

  return (
    <main>
      <MainHeader image='/hero-blog.png' />
      <CardsWrapper
        numCardsMobile={3}
        numCardsTablet={6}
        numCardsDesktop={20}
        showButton={false}
        chronicle={chronicles}
      />
      <BannerQuote image='/bg.png' />
      <Contact image='/contact-bg.png' />
    </main>
  )
}

export default Blog
