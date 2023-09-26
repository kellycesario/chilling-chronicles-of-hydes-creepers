import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAdditionalInformationSkeleton } from "./TypeAdditionalInformation";
import type { TypeCategorySkeleton } from "./TypeCategory";

export interface TypeChronicleFields {
    lead: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    picture: EntryFieldTypes.AssetLink;
    alt: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    firstParagraph: EntryFieldTypes.RichText;
    subtitle: EntryFieldTypes.Symbol;
    secondParagraph: EntryFieldTypes.RichText;
    thirdParagraph: EntryFieldTypes.RichText;
    quote: EntryFieldTypes.Symbol;
    emphasis: EntryFieldTypes.Symbol;
    fourthParagraph: EntryFieldTypes.RichText;
    reviewer: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    additionalInformation: EntryFieldTypes.EntryLink<TypeAdditionalInformationSkeleton>;
    category?: EntryFieldTypes.EntryLink<TypeCategorySkeleton>;
    slug: EntryFieldTypes.Symbol;
}

export type TypeChronicleSkeleton = EntrySkeletonType<TypeChronicleFields, "chronicle">;
export type TypeChronicle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeChronicleSkeleton, Modifiers, Locales>;
