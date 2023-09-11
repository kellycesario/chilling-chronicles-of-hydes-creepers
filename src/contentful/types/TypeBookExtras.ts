import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBookExtrasFields {
    officialSummary: EntryFieldTypes.RichText;
    sinisterBookInsights: EntryFieldTypes.RichText;
    notesOnTranslation: EntryFieldTypes.RichText;
    publicationDate: EntryFieldTypes.Symbol;
    pages: EntryFieldTypes.Integer;
    isbn: EntryFieldTypes.Symbol;
}

export type TypeBookExtrasSkeleton = EntrySkeletonType<TypeBookExtrasFields, "bookExtras">;
export type TypeBookExtras<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBookExtrasSkeleton, Modifiers, Locales>;
