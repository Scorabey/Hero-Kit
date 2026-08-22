import primitives from "../../primitives";

export const content = {
  light: {
    content1: primitives.colors.colors.common.white,
    content2: primitives.colors.colors.common.zinc[100],
    content3: primitives.colors.colors.common.zinc[300],
    content4: primitives.colors.colors.common.zinc[300],
    "content1-foreground": "#11181C",
    "content2-foreground": primitives.colors.colors.common.zinc[800],
    "content3-foreground": primitives.colors.colors.common.zinc[700],
    "content4-foreground": primitives.colors.colors.common.zinc[600],
  },
  dark: {
    content1: primitives.colors.colors.common.zinc[900],
    content2: primitives.colors.colors.common.zinc[800],
    content3: primitives.colors.colors.common.zinc[700],
    content4: primitives.colors.colors.common.zinc[600],
    "content1-foreground": primitives.colors.colors.common.zinc[50],
    "content2-foreground": primitives.colors.colors.common.zinc[100],
    "content3-foreground": primitives.colors.colors.common.zinc[200],
    "content4-foreground": primitives.colors.colors.common.zinc[300],
  },
};
