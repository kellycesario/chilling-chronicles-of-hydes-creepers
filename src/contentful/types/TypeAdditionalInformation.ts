import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAdditionalInformationFields {
    officialSummary: EntryFieldTypes.RichText;
    sinisterBookInsights: EntryFieldTypes.RichText;
    notesOnTranslation: EntryFieldTypes.RichText;
    publicationDate: EntryFieldTypes.Symbol;
    pages: EntryFieldTypes.Integer;
    isbn: EntryFieldTypes.Symbol;
}

export type TypeAdditionalInformationSkeleton = EntrySkeletonType<TypeAdditionalInformationFields, "additionalInformation">;
export type TypeAdditionalInformation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAdditionalInformationSkeleton, Modifiers, Locales>;
