import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Asset, ChainModifiers, Entry, UnresolvedLink } from 'contentful'
import contentfulClient from './contentfulClient'
import {
  TypeAdditionalInformationSkeleton,
  TypeCategorySkeleton,
  TypeChronicleSkeleton,
} from './types'

type ChronicleEntry = Entry<TypeChronicleSkeleton, undefined, string>
type InfoEntry = Entry<TypeAdditionalInformationSkeleton, undefined, string>

export interface Category {
  category?: 'death' | 'ghost' | 'religion' | 'unworldly' | 'witchcraft'
}

export interface AdditionalInformation {
  officialSummary: string
  sinisterBookInsights: string
  notesOnTranslation: string
  publicationDate: string
  pages: number | null
  isbn: string
}

export interface Chronicle {
  lead: string
  headline: string
  subtitle: string
  reviewer: string
  picture: Asset<ChainModifiers, string> | UnresolvedLink<'Asset'>
  firstParagraph: string
  secondParagraph: string
  thirdParagraph: string
  fourthParagraph: string
  slug: string
  description: string
  emphasis: string
  quote: string
  date: string
  alt: string
  additionalInformation: AdditionalInformation | null
  category?:
    | Category
    | UnresolvedLink<'Entry'>
    | Entry<TypeCategorySkeleton, undefined, string>
    | { category: string }
}

async function fetchAdditionalInformationByIsbn({
  preview,
  isbn,
}: {
  preview: boolean
  isbn: string
}): Promise<InfoEntry | null> {
  const contentful = contentfulClient({ preview })

  const infoResult =
    await contentful.getEntries<TypeAdditionalInformationSkeleton>({
      content_type: 'additionalInformation',
      'fields.isbn': isbn,
      include: 2,
    })

  if (infoResult.items.length > 0) {
    return infoResult.items[0]
  }

  return null
}

function parseContentfulInfo(
  infoEntry?: InfoEntry
): AdditionalInformation | null {
  if (!infoEntry) {
    return null
  }

  const fields = infoEntry.fields

  return {
    officialSummary: fields.officialSummary
      ? documentToPlainTextString(fields.officialSummary)
      : '',
    sinisterBookInsights: fields.sinisterBookInsights
      ? documentToPlainTextString(fields.sinisterBookInsights)
      : '',
    notesOnTranslation: fields.notesOnTranslation
      ? documentToPlainTextString(fields.notesOnTranslation)
      : '',
    publicationDate: fields.publicationDate || '',
    pages: fields.pages || null,
    isbn: fields.isbn || '',
  }
}

function isUnresolvedLink(obj: any): obj is UnresolvedLink<'Entry'> {
  return obj.sys?.type === 'Link' && obj.sys?.linkType === 'Entry'
}

export async function parseContentfulBlogPost(
  chronicleEntry?: ChronicleEntry
): Promise<Chronicle | null> {
  if (!chronicleEntry) {
    return null
  }

  try {
    const additionalInformationFields =
      chronicleEntry.fields?.additionalInformation
    const categoryFields = chronicleEntry.fields?.category

    let isbn: string
    if (
      additionalInformationFields &&
      !isUnresolvedLink(additionalInformationFields)
    ) {
      isbn = additionalInformationFields.fields?.isbn || ''
    } else {
      isbn = ''
    }

    const category = isUnresolvedLink(categoryFields)
      ? { category: '' }
      : { category: categoryFields?.fields?.category || '' }

    const additionalInformation = isUnresolvedLink(additionalInformationFields)
      ? null
      : parseContentfulInfo(additionalInformationFields)

    return {
      lead: chronicleEntry.fields.lead || '',
      headline: chronicleEntry.fields.headline || '',
      subtitle: chronicleEntry.fields.subtitle || '',
      reviewer: chronicleEntry.fields.reviewer || '',
      picture: chronicleEntry.fields.picture,
      firstParagraph:
        documentToPlainTextString(chronicleEntry.fields.firstParagraph) || '',
      secondParagraph:
        documentToPlainTextString(chronicleEntry.fields.secondParagraph) || '',
      thirdParagraph:
        documentToPlainTextString(chronicleEntry.fields.thirdParagraph) || '',
      fourthParagraph:
        documentToPlainTextString(chronicleEntry.fields.fourthParagraph) || '',
      slug: chronicleEntry.fields.slug || '',
      description: chronicleEntry.fields.description || '',
      emphasis: chronicleEntry.fields.emphasis || '',
      quote: chronicleEntry.fields.quote || '',
      date: chronicleEntry.fields.date || '',
      alt: chronicleEntry.fields.alt || '',
      category,
      additionalInformation,
    }
  } catch (error) {
    console.error('Error parsing contentful blog post:', error)
    throw error
  }
}
interface FetchChroniclesOptions {
  preview: boolean
}

export async function fetchChronicles({
  preview,
}: FetchChroniclesOptions): Promise<Chronicle[]> {
  try {
    const contentful = contentfulClient({ preview })
    const chronicleResult = await contentful.getEntries<TypeChronicleSkeleton>({
      content_type: 'chronicle',
      include: 2,
      order: ['-sys.createdAt'],
    })

    const chroniclePromises = chronicleResult.items.map(
      async (chronicleEntry) => {
        const chronicle = await parseContentfulBlogPost(chronicleEntry)
        return chronicle as Chronicle
      }
    )

    const chronicles = await Promise.all(chroniclePromises)
    return chronicles
  } catch (error) {
    console.error('Error fetching chronicles:', error)
    throw error
  }
}

interface FetchChronicleOptions {
  slug: string
  preview: boolean
}

export async function fetchChronicle({
  slug,
  preview,
}: FetchChronicleOptions): Promise<Chronicle | null> {
  const contentful = contentfulClient({ preview })

  const chronicleResult = await contentful.getEntries<TypeChronicleSkeleton>({
    content_type: 'chronicle',
    'fields.slug': slug,
    include: 2,
  })

  return parseContentfulBlogPost(chronicleResult.items[0])
}
