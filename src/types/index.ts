export type SizeType = 'sm' | 'md' | 'lg';

export type RadiusType = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type ColorsType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type VariantType = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';

// This is an array of data that accepts argTypes > options
export const SizeStory: SizeType[] = ['sm', 'md', 'lg'] as const;

export const RadiusStory: RadiusType[] = ['none', 'sm', 'md', 'lg', 'full'] as const;

export const ColorStory: ColorsType[] = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

export const VariantStory: VariantType[] = ['solid', 'bordered', 'light', 'flat', 'faded', 'ghost', 'shadow'] as const;

// Iterates through the object array and removes
// those objects that are not in the exclude statement,
// so as not to write objects for each component
export const ExcludeStoryOptions = <T extends string>(source: T[], exclude: T[]): T[] => {
    return source.filter(item => !exclude.includes(item));
}

export const IncludeStoryOptions = <T extends string>(source: T[], include: string[]): string[] => {
    return source.filter(item => include.includes(item));
}