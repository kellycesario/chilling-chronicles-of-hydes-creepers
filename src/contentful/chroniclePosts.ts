import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Document } from '@contentful/rich-text-types';
import { Asset, ChainModifiers, Entry, UnresolvedLink } from 'contentful';
import contentfulClient from './contentfulClient';
import { TypeAdditionalInformationSkeleton, TypeChronicleSkeleton } from './types';

type ChronicleEntry = Entry<TypeChronicleSkeleton, undefined, string>;
type InfoEntry = Entry<TypeAdditionalInformationSkeleton, undefined, string>;

export interface AdditionalInformation {
  officialSummary: string;
  sinisterBookInsights: string;
  notesOnTranslation: string;
  publicationDate: string;
  pages: number | null;
  isbn: string;
}

export interface Chronicle {
  lead: string;
  subtitle: string;
  reviewer: string;
  picture: Asset<ChainModifiers, string> | UnresolvedLink<'Asset'>;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  fourthParagraph: string;
  slug: string;
  description: string;
  emphasis: string;
  quote: string;
  date: string;
  alt: string;
  additionalInformation: AdditionalInformation | null;
}

async function fetchAdditionalInformationByIsbn({
  preview,
  isbn,
}: {
  preview: boolean;
  isbn: string;
}): Promise<InfoEntry | null> {
  const contentful = contentfulClient({ preview });

  const infoResult = await contentful.getEntries<TypeAdditionalInformationSkeleton>({
    content_type: 'additionalInformation',
    'fields.isbn': isbn,
    include: 2,
  });

  if (infoResult.items.length > 0) {
    return infoResult.items[0];
  }

  return null;
}

function parseContentfulInfo(infoEntry?: InfoEntry): AdditionalInformation | null {
  if (!infoEntry) {
    return null;
  }

  const fields = infoEntry.fields;

  return {
    officialSummary: fields.officialSummary ? documentToPlainTextString(fields.officialSummary) : '',
    sinisterBookInsights: fields.sinisterBookInsights ? documentToPlainTextString(fields.sinisterBookInsights) : '',
    notesOnTranslation: fields.notesOnTranslation ? documentToPlainTextString(fields.notesOnTranslation) : '',
    publicationDate: fields.publicationDate || '',
    pages: fields.pages || null,
    isbn: fields.isbn || '',
  };
}

export async function parseContentfulBlogPost(chronicleEntry?: ChronicleEntry): Promise<Chronicle | null> {
  if (!chronicleEntry) {
    return null;
  }

  const isbn = chronicleEntry.fields.additionalInformation?.fields.isbn || '';

  const infoEntry = await fetchAdditionalInformationByIsbn({
    preview: false,
    isbn,
  });

  const additionalInformation = parseContentfulInfo(infoEntry);

  return {
    lead: chronicleEntry.fields.lead || '',
    subtitle: chronicleEntry.fields.subtitle || '',
    reviewer: chronicleEntry.fields.reviewer || '',
    picture: chronicleEntry.fields.picture,
    firstParagraph: documentToPlainTextString(chronicleEntry.fields.firstParagraph) || '',
    secondParagraph: documentToPlainTextString(chronicleEntry.fields.secondParagraph) || '',
    thirdParagraph: documentToPlainTextString(chronicleEntry.fields.thirdParagraph) || '',
    fourthParagraph: documentToPlainTextString(chronicleEntry.fields.fourthParagraph) || '',
    slug: chronicleEntry.fields.slug || '',
    description: chronicleEntry.fields.description || '',
    emphasis: chronicleEntry.fields.emphasis || '',
    quote: chronicleEntry.fields.quote || '',
    date: chronicleEntry.fields.date || '',
    alt: chronicleEntry.fields.alt || '',
    additionalInformation: additionalInformation || {
      officialSummary: '',
      sinisterBookInsights: '',
      notesOnTranslation: '',
      publicationDate: '',
      pages: 0,
      isbn: '',
    },
  };
}

interface FetchChroniclesOptions {
  preview: boolean;
}

export async function fetchChronicles({ preview }: FetchChroniclesOptions): Promise<Chronicle[]> {
  const contentful = contentfulClient({ preview });

  const chronicleResult = await contentful.getEntries<TypeChronicleSkeleton>({
    content_type: 'chronicle',
    include: 2,
    order: ['fields.lead'],
  });

  return chronicleResult.items.map(
    (chronicleEntry) => parseContentfulBlogPost(chronicleEntry) as unknown as Chronicle
  );
}

interface FetchChronicleOptions {
  slug: string;
  preview: boolean;
}

export async function fetchChronicle({ slug, preview }: FetchChronicleOptions): Promise<Chronicle | null> {
  const contentful = contentfulClient({ preview });

  const chronicleResult = await contentful.getEntries<TypeChronicleSkeleton>({
    content_type: 'chronicle',
    'fields.slug': slug,
    include: 2,
  });

  return parseContentfulBlogPost(chronicleResult.items[0]);
}
