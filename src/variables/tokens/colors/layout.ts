import { theme } from "../..";

export const layout: object = {
  "foreground-900": {
    light: theme.primitives.colors.colors.common.zinc[900],
    dark: theme.primitives.colors.colors.common.zinc[50],
  },
  "foreground-800": {
    light: theme.primitives.colors.colors.common.zinc[800],
    dark: theme.primitives.colors.colors.common.zinc[100],
  },
  "foreground-700": {
    light: theme.primitives.colors.colors.common.zinc[700],
    dark: theme.primitives.colors.colors.common.zinc[200],
  },
  "foreground-600": {
    light: theme.primitives.colors.colors.common.zinc[600],
    dark: theme.primitives.colors.colors.common.zinc[300],
  },
  "foreground-500": {
    light: theme.primitives.colors.colors.common.zinc[500],
    dark: theme.primitives.colors.colors.common.zinc[400],
  },
  "foreground-400": {
    light: theme.primitives.colors.colors.common.zinc[400],
    dark: theme.primitives.colors.colors.common.zinc[500],
  },
  "foreground-300": {
    light: theme.primitives.colors.colors.common.zinc[300],
    dark: theme.primitives.colors.colors.common.zinc[600],
  },
  "foreground-200": {
    light: theme.primitives.colors.colors.common.zinc[200],
    dark: theme.primitives.colors.colors.common.zinc[700],
  },
  "foreground-100": {
    light: theme.primitives.colors.colors.common.zinc[100],
    dark: theme.primitives.colors.colors.common.zinc[800],
  },
  "foreground-50": {
    light: theme.primitives.colors.colors.common.zinc[50],
    dark: theme.primitives.colors.colors.common.zinc[900],
  },
  overlay: {
    light: "rgba(0, 0, 0, 0.3)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
  focus: {
    light: theme.primitives.colors.colors.common.blue[500],
    dark: theme.primitives.colors.colors.common.blue[500],
  },
  "focus-op-20": {
    light: "rgba(0, 111, 238, 0.2)",
    dark: "rgba(0, 111, 238, 0.2)",
  },
  divider: {
    light: "rgba(17, 17, 17, 0.15)",
    dark: "rgba(255, 255, 255, 0.15)",
  },
  foreground: {
    light: "#11181C",
    dark: "#ECEDEE",
  },
  background: {
    light: theme.primitives.colors.colors.common.white,
    dark: theme.primitives.colors.colors.common.black,
  },
};
