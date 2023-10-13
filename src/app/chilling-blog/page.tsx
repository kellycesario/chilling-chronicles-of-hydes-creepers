import { BannerQuote } from '@/components/organisms/BannerQuote'
import { Contact } from '@/components/organisms/Contact'
import { MainHeader } from '@/components/organisms/MainHeader'
import { fetchChronicles } from '@/services/contentful/chroniclePosts'
import { draftMode } from 'next/headers'

import { CardsWrapper } from '@/components/organisms/CardsWrapper'

interface ChronicleParams {
  slug: string
}

export async function generateStaticParams(): Promise<ChronicleParams[]> {
  const chronicles = await fetchChronicles({
    preview: false,
  })

  return chronicles.map((post) => ({ slug: post.slug }))
}

async function Blog() {
  const chronicles = await fetchChronicles({
    preview: draftMode().isEnabled,
  })

  return (
    <main>
      <MainHeader image='/hero-blog.png' />
      <CardsWrapper
        numCardsMobile={3}
        numCardsTablet={6}
        numCardsDesktop={6}
        showButton={false}
        chronicle={chronicles}
      />
      <BannerQuote image='/bg.png' />
      <Contact image='/contact-bg.png' />
    </main>
  )
}

export default Blog
