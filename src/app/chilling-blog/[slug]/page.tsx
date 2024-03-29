import { Accordion } from '@/components/organisms/Accordion'
import { Advertising } from '@/components/organisms/Advertising'
import { ArticleContent } from '@/components/organisms/ArticleContent'
import {
  fetchChronicle,
  fetchChronicles,
} from '@/services/contentful/chroniclePosts'
import { getProcessedPicture } from '@/utils/formatImage'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

interface ChronicleParams {
  slug: string
}

export interface ChronicleProps {
  params: ChronicleParams
}

export async function generateStaticParams(): Promise<ChronicleParams[]> {
  const chronicles = await fetchChronicles({ preview: false })

  return chronicles.map((post) => ({ slug: post.slug }))
}

async function Article({ params }: ChronicleProps) {
  const chronicle = await fetchChronicle({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!chronicle) {
    return notFound()
  }

  const picture: string | undefined = getProcessedPicture(chronicle.picture)

  return (
    <section>
      <ArticleContent
        reviewer={chronicle.reviewer}
        date={chronicle.date}
        alt={chronicle.alt}
        lead={chronicle.lead}
        picture={picture}
        subtitle={chronicle.subtitle}
        description={chronicle.description}
        emphasis={chronicle.emphasis}
        quote={chronicle.quote}
        firstParagraph={chronicle.firstParagraph}
        secondParagraph={chronicle.secondParagraph}
        thirdParagraph={chronicle.thirdParagraph}
        fourthParagraph={chronicle.fourthParagraph}
        slug={chronicle.slug}
      />
      <Advertising
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot='6765860573'
      />
      <Accordion
        officialSummary={chronicle.additionalInformation.officialSummary}
        sinisterBookInsights={
          chronicle.additionalInformation.sinisterBookInsights
        }
        notesOnTranslation={chronicle.additionalInformation.notesOnTranslation}
        publicationDate={chronicle.additionalInformation.publicationDate}
        pages={chronicle.additionalInformation.pages}
        isbn={chronicle.additionalInformation.isbn}
      />
    </section>
  )
}

export default Article
