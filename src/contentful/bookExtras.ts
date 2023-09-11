import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'
import contentfulClient from './contentfulClient'
import { TypeBookExtrasSkeleton } from './types'

type ExtrasEntry = Entry<TypeBookExtrasSkeleton, undefined, string>

export interface Extras {
  officialSummary: Document | string
  sinisterBookInsights: Document | string
  notesOnTranslation: Document | string
  publicationDate: string
  pages: number
  isbn: string
}

export function parseContentfulExtras(
  extrasEntry?: ExtrasEntry
): Extras | null {
  if (!extrasEntry) {
    return null
  }

  return {
    officialSummary: extrasEntry.fields.officialSummary || '',
    sinisterBookInsights: extrasEntry.fields.sinisterBookInsights || '',
    notesOnTranslation: extrasEntry.fields.notesOnTranslation || null,
    publicationDate: extrasEntry.fields.publicationDate || '',
    pages: extrasEntry.fields.pages || null,
    isbn: extrasEntry.fields.isbn || '',
  }
}

interface FetchBookExtras {
  preview: boolean
}

export async function fetchExtras({
  preview,
}: FetchBookExtras): Promise<Extras[]> {
  const contentful = contentfulClient({ preview })

  const extrasResult = await contentful.getEntries<TypeBookExtrasSkeleton>({
    content_type: 'bookExtras',
    include: 2,
    order: ['fields.isbn'],
  })

  return extrasResult.items.map(
    (extrasEntry) => parseContentfulExtras(extrasEntry) as Extras
  )
}
