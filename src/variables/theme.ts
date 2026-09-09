import { breakpoints } from "./tokens/breakpoints/breakpoints";
import { base } from "./tokens/colors/base";
import { content } from "./tokens/colors/content";
import { flat } from "./tokens/colors/flat";
import { layout } from "./tokens/colors/layout";
import { borderWidth } from "./tokens/layout/border-width";
import { fontSize } from "./tokens/layout/font-size";
import { lineHeight } from "./tokens/layout/line-height";
import { radius } from "./tokens/layout/radius";
import { shadow } from "./tokens/shadow/shadow";
import { text } from "./tokens/typography/text";

export const rawTheme = {
  colors: {
    base,
    content,
    flat,
    layout,
  },
  layout: {
    borderWidth,
    fontSize,
    radius,
    lineHeight,
  },
  shadow,
  text,
  breakpoints,
} as const;

export type RawThemeType = typeof rawTheme;
type ColorPair = { light: string; dark: string };
type ResolveTheme<T> =
    T extends { light: infer L; dark: infer D }
        ? L extends object
            ? D extends object
                ? L
                : never
            : T
        : T extends object
            ? { [K in keyof T]: ResolveTheme<T[K]> }
            : T;

export type ThemeType = ResolveTheme<RawThemeType>;
export type ThemeMode = "light" | "dark";

function isColorPair(value: unknown): value is ColorPair {
  return (
    typeof value === "object" &&
    value !== null &&
    "light" in value &&
    "dark" in value
  );
}

function resolveTheme<T>(node: T, mode: ThemeMode): ResolveTheme<T> {
  if (isColorPair(node)) return node[mode] as ResolveTheme<T>;
  if (typeof node === "object" && node !== null) {
    const result: any = {};
    for (const key in node)
      result[key] = resolveTheme((node as any)[key], mode);
    return result;
  }
  return node as ResolveTheme<T>;
}

export const getTheme = (mode: ThemeMode): ThemeType =>
  resolveTheme(rawTheme, mode);

export const defaultTheme = getTheme("light");
