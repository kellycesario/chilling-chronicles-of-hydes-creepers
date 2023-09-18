import { Document } from '@contentful/rich-text-types';
import { Asset, ChainModifiers, Entry, UnresolvedLink } from 'contentful';
import contentfulClient from './contentfulClient';
import { TypeChronicleSkeleton } from './types';
import { AdditionalInformation, fetchExtra } from './additionalInformationPosts';

type ChronicleEntry = Entry<TypeChronicleSkeleton, undefined, string>;
export interface Chronicle {
  lead: string;
  subtitle: string;
  reviewer: string;
  picture: Asset<ChainModifiers, string> | UnresolvedLink<'Asset'>;
  firstParagraph: Document | string;
  secondParagraph: Document | string;
  thirdParagraph: Document | string;
  fourthParagraph: Document | string;
  slug: string;
  description: string;
  emphasis: string;
  quote: string;
  date: string;
  alt: string;
  additionalInformation: AdditionalInformation | null;
}

export async function parseContentfulBlogPost(
  chronicleEntry?: ChronicleEntry
): Promise<Chronicle | null> {
  if (!chronicleEntry) {
    return null;
  }

  const additionalInfo = await fetchExtra({
    isbn: chronicleEntry.fields.additionalInformation.sys.id || '',
    preview: false,
  });

  return {
    lead: chronicleEntry.fields.lead || '',
    subtitle: chronicleEntry.fields.subtitle || '',
    reviewer: chronicleEntry.fields.reviewer || '',
    picture: chronicleEntry.fields.picture,
    firstParagraph: chronicleEntry.fields.firstParagraph || '',
    secondParagraph: chronicleEntry.fields.secondParagraph || '',
    thirdParagraph: chronicleEntry.fields.thirdParagraph || '',
    fourthParagraph: chronicleEntry.fields.fourthParagraph || '',
    slug: chronicleEntry.fields.slug || '',
    description: chronicleEntry.fields.description || '',
    emphasis: chronicleEntry.fields.emphasis || '',
    quote: chronicleEntry.fields.quote || '',
    date: chronicleEntry.fields.date || '',
    alt: chronicleEntry.fields.alt || '',
    additionalInformation: {
      ...additionalInfo,
    },
  };
}

interface FetchChroniclesOptions {
  preview: boolean
}

export async function fetchChronicles({
  preview,
}: FetchChroniclesOptions): Promise<Chronicle[]> {
  const contentful = contentfulClient({ preview })

  const chronicleResult = await contentful.getEntries<TypeChronicleSkeleton>({
    content_type: 'chronicle',
    include: 2,
    order: ['fields.lead'],
  })

  return chronicleResult.items.map(
    (chronicleEntry) => parseContentfulBlogPost(chronicleEntry) as unknown as Chronicle
  )
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
