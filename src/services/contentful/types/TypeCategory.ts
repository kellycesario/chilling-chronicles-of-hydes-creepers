import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoryFields {
    category?: EntryFieldTypes.Symbol<"death" | "ghost" | "religion" | "unworldly" | "witchcraft">;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
