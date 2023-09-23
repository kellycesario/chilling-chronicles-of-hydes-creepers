import { fetchChronicle } from '@/contentful/chroniclePosts'
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { ChronicleProps } from './page'

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

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
