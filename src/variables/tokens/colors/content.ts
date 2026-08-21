import { theme } from "../..";

export const content: object = {
  content1: {
    light: theme.primitives.colors.colors.common.white,
    dark: theme.primitives.colors.colors.common.zinc[900],
  },
  content2: {
    light: theme.primitives.colors.colors.common.zinc[100],
    dark: theme.primitives.colors.colors.common.zinc[800],
  },
  content3: {
    light: theme.primitives.colors.colors.common.zinc[300],
    dark: theme.primitives.colors.colors.common.zinc[700],
  },
  content4: {
    light: theme.primitives.colors.colors.common.zinc[300],
    dark: theme.primitives.colors.colors.common.zinc[600],
  },
  "content1-foreground": {
    light: "#11181C",
    dark: theme.primitives.colors.colors.common.zinc[50],
  },
  "content2-foreground": {
    light: theme.primitives.colors.colors.common.zinc[800],
    dark: theme.primitives.colors.colors.common.zinc[100],
  },
  "content3-foreground": {
    light: theme.primitives.colors.colors.common.zinc[700],
    dark: theme.primitives.colors.colors.common.zinc[200],
  },
  "content4-foreground": {
    light: theme.primitives.colors.colors.common.zinc[600],
    dark: theme.primitives.colors.colors.common.zinc[300],
  },
};
