import { Document } from '@contentful/rich-text-types'

import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'
import { TypeAdditionalInformationSkeleton } from './types'

export type InfoEntry = Entry<
  TypeAdditionalInformationSkeleton,
  undefined,
  string
>

export interface AdditionalInformation {
  officialSummary: Document | string
  sinisterBookInsights: Document | string
  notesOnTranslation: Document | string
  publicationDate: string
  pages: number | null
  isbn: string
}

export function parseContentfulInfo(
  infoEntry?: InfoEntry
): AdditionalInformation | null {
  if (!infoEntry) {
    return null
  }

  return {
    officialSummary:
      infoEntry.fields.officialSummary.content[0].content[0].value,
    sinisterBookInsights:
      infoEntry.fields.sinisterBookInsights.content[0].content[0].value,
    notesOnTranslation:
      infoEntry.fields.notesOnTranslation.content[0].content[0].value,
    publicationDate: infoEntry.fields.publicationDate || '',
    pages: infoEntry.fields.pages || null,
    isbn: infoEntry.fields.isbn || '',
  }
}

export interface FetchInformation {
  preview: boolean
}

export async function fetchAdditionalInformation({
  preview,
}: FetchInformation): Promise<AdditionalInformation[]> {
  const contentful = contentfulClient({ preview })

  const infoResult =
    await contentful.getEntries<TypeAdditionalInformationSkeleton>({
      content_type: 'additionalInformation',
      include: 2,
      order: ['fields.isbn'],
    })

  if (!Array.isArray(infoResult.items)) {
    throw new Error('Result is not iterable')
  }

  return infoResult.items
    .map(parseContentfulInfo)
    .filter(Boolean) as AdditionalInformation[]
}

export interface FetchInfoOptions {
  isbn: string
  preview: boolean
}

export async function fetchExtra({
  isbn,
  preview,
}: FetchInfoOptions): Promise<AdditionalInformation | null> {
  const contentful = contentfulClient({ preview })

  const infoResult =
    await contentful.getEntries<TypeAdditionalInformationSkeleton>({
      content_type: 'additionalInformation',
      'fields.isbn': isbn,
      include: 2,
    })

  if (infoResult.items.length > 0) {
    return parseContentfulInfo(infoResult.items[0])
  }

  return null
}
