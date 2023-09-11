import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Accordion } from '@/components/organisms/Accordion'
import { ArticleContent } from '@/components/organisms/ArticleContent'

import { fetchChronicle, fetchChronicles } from '@/contentful/chroniclePosts'

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

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
        firstParagraph={
          typeof chronicle.firstParagraph === 'string'
            ? chronicle.firstParagraph
            : documentToPlainTextString(chronicle.firstParagraph)
        }
        secondParagraph={
          typeof chronicle.secondParagraph === 'string'
            ? chronicle.secondParagraph
            : documentToPlainTextString(chronicle.secondParagraph)
        }
        thirdParagraph={
          typeof chronicle.thirdParagraph === 'string'
            ? chronicle.thirdParagraph
            : documentToPlainTextString(chronicle.thirdParagraph)
        }
        fourthParagraph={
          typeof chronicle.fourthParagraph === 'string'
            ? chronicle.fourthParagraph
            : documentToPlainTextString(chronicle.fourthParagraph)
        }
      />
      <Accordion />
    </section>
  )
}

export default Article
