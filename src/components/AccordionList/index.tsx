import type { ReactNode, HTMLAttributes} from "react";
import { AccordionWrapper, AccordionInlineHr, AccordionPadding } from "./styles.ts";

export type AccordianVariant = "default" | "shadow" | "bordered" | "splitted";

export interface AccordionListProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: (variant: AccordianVariant ) => ReactNode;
    variant?: AccordianVariant;
}

export  const AccordionList = ({ children, variant = "default", ...rest }: AccordionListProps) => {
    return (
        <AccordionPadding {...rest} $variant={variant}>
            <AccordionWrapper $variant={variant}>
                <AccordionInlineHr $variant={variant}>
                    {children?.(variant)}
                </AccordionInlineHr>
            </AccordionWrapper>
        </AccordionPadding>
    )
}