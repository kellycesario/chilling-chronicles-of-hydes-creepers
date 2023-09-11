import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeChronicleFields {
    lead: EntryFieldTypes.Symbol;
    subtitle: EntryFieldTypes.Symbol;
    reviewer: EntryFieldTypes.Symbol;
    picture: EntryFieldTypes.AssetLink;
    firstParagraph: EntryFieldTypes.RichText;
    secondParagraph: EntryFieldTypes.RichText;
    thirdParagraph: EntryFieldTypes.RichText;
    fourthParagraph: EntryFieldTypes.RichText;
    slug: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    emphasis: EntryFieldTypes.Symbol;
    quote: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    alt: EntryFieldTypes.Symbol;
    category?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeChronicleSkeleton = EntrySkeletonType<TypeChronicleFields, "chronicle">;
export type TypeChronicle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeChronicleSkeleton, Modifiers, Locales>;
