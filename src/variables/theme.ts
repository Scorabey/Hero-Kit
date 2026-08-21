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

export const theme = {
  colors: {
    base,
    content,
    flat,
    layout,
  },
  breakpoints,
  layout: {
    borderWidth,
    fontSize,
    radius,
    lineHeight,
  },
  shadow,
  text,
};
