import {useId,  type ReactNode, type HTMLAttributes} from "react";
import {
  AccordionItem,
  AccordianInput,
  AccordionLabel,
  AccordionWrapper,
  AccordionContent,
} from "./styles.ts";
import { Arrow } from "../../icons";
import type {AccordianVariant} from "../AccordionList";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
  description?: string;
  variant: AccordianVariant;
}

export const Accordion = ({
  children,
  label,
  description,
    variant,
  ...rest
}: AccordionProps) => {
  const uniqId = useId();

  return (
    <AccordionItem {...rest} $variant={variant}>
      <AccordianInput type="checkbox" id={uniqId}/>
      <AccordionLabel htmlFor={uniqId}>
        <div>
          <span>{label}</span>
          <span>{description}</span>
        </div>
        <Arrow />
      </AccordionLabel>
      <AccordionWrapper>
        <AccordionContent>{children}</AccordionContent>
      </AccordionWrapper>
    </AccordionItem>
  );
};
