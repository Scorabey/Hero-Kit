import type { ReactNode, HTMLAttributes } from "react";
import {
  AccordionWrapper,
  AccordionInlineHr,
  AccordionPadding,
} from "./styles.ts";

export type AccordianVariant = "default" | "shadow" | "bordered" | "splitted";

export interface AccordionListProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  children: (variant: AccordianVariant) => ReactNode;
  variant?: AccordianVariant;
}

export const AccordionList = ({
  children,
  variant = "default",
  ...rest
}: AccordionListProps) => {

  /*
  This is a list component,
  it serves as a wrapper for the Accordion component,
  without it the Accordion will be rendered
  as a separate component without some of the styles.
  */

  return (
    <AccordionPadding {...rest} $variant={variant}>
      <AccordionWrapper $variant={variant}>
        <AccordionInlineHr $variant={variant}>
          {children?.(variant)}
        </AccordionInlineHr>
      </AccordionWrapper>
    </AccordionPadding>
  );
};
