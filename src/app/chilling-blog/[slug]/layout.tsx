import { Header } from '@/components/molecules/Header'
import { fetchChronicle } from '@/contentful/chroniclePosts'
import styles from '@/styles/_slug.module.scss'
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
      <section className={styles.layout}>
        <Header />
      </section>
      {children}
    </>
  )
}
