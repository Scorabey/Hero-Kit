import primitives from "../../primitives";

export const layout = {
  "foreground-900": {
    light: primitives.colors.colors.common.zinc[900],
    dark: primitives.colors.colors.common.zinc[50],
  },
  "foreground-800": {
    light: primitives.colors.colors.common.zinc[800],
    dark: primitives.colors.colors.common.zinc[100],
  },
  "foreground-700": {
    light: primitives.colors.colors.common.zinc[700],
    dark: primitives.colors.colors.common.zinc[200],
  },
  "foreground-600": {
    light: primitives.colors.colors.common.zinc[600],
    dark: primitives.colors.colors.common.zinc[300],
  },
  "foreground-500": {
    light: primitives.colors.colors.common.zinc[500],
    dark: primitives.colors.colors.common.zinc[400],
  },
  "foreground-400": {
    light: primitives.colors.colors.common.zinc[400],
    dark: primitives.colors.colors.common.zinc[500],
  },
  "foreground-300": {
    light: primitives.colors.colors.common.zinc[300],
    dark: primitives.colors.colors.common.zinc[600],
  },
  "foreground-200": {
    light: primitives.colors.colors.common.zinc[200],
    dark: primitives.colors.colors.common.zinc[700],
  },
  "foreground-100": {
    light: primitives.colors.colors.common.zinc[100],
    dark: primitives.colors.colors.common.zinc[800],
  },
  "foreground-50": {
    light: primitives.colors.colors.common.zinc[50],
    dark: primitives.colors.colors.common.zinc[900],
  },
  overlay: {
    light: "rgba(0, 0, 0, 0.3)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
  focus: {
    light: primitives.colors.colors.common.blue[500],
    dark: primitives.colors.colors.common.blue[500],
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
    light: primitives.colors.colors.common.white,
    dark: primitives.colors.colors.common.black,
  },
};
