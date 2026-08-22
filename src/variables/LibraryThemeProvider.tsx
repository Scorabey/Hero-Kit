import { ThemeProvider as SCThemeProvider } from "styled-components";
import type { ThemeType } from "./theme";
import { defaultTheme } from "./theme";

export interface LibraryThemeProviderProps {
  theme?: ThemeType;
  children: React.ReactNode;
}

export function LibraryThemeProvider({
  theme = defaultTheme,
  children,
}: LibraryThemeProviderProps) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}
