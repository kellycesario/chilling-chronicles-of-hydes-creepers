import { Accordion } from '@/components/organisms/Accordion'
import { ArticleContent } from '@/components/organisms/ArticleContent'
import { fetchChronicle, fetchChronicles } from '@/contentful/chroniclePosts'
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

interface ChronicleParams {
  slug: string
}

interface ChronicleProps {
  params: ChronicleParams
}

export async function generateStaticParams(): Promise<ChronicleParams[]> {
  const chronicles = await fetchChronicles({ preview: false })

  return chronicles.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: ChronicleProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const chronicle = await fetchChronicle({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!chronicle) {
    return notFound()
  }

  return {
    title: chronicle.lead,
  }
}

async function Article({ params }: ChronicleProps) {
  const chronicle = await fetchChronicle({
    slug: params.slug,
    preview: draftMode().isEnabled,
  })

  if (!chronicle) {
    return notFound()
  }

  let imageUrl: string | undefined = ''

  if (chronicle.picture && 'fields' in chronicle.picture) {
    imageUrl = `https:${chronicle.picture.fields.file.url}`
  } else if (typeof chronicle.picture === 'string') {
    imageUrl = chronicle.picture
  }

  return (
    <section>
      <ArticleContent
        reviewer={chronicle.reviewer}
        date={chronicle.date}
        alt={chronicle.alt}
        lead={chronicle.lead}
        picture={imageUrl}
        subtitle={chronicle.subtitle}
        description={chronicle.description}
        emphasis={chronicle.emphasis}
        quote={chronicle.quote}
        firstParagraph={chronicle.firstParagraph}
        secondParagraph={chronicle.secondParagraph}
        thirdParagraph={chronicle.thirdParagraph}
        fourthParagraph={chronicle.fourthParagraph}
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
