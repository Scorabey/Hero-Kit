import type { HTMLAttributes, ReactNode } from "react";
import {
  AccordionItem,
  AccordianInput,
  AccordionLabel,
  AccordionWrapper,
  AccordionContent,
} from "./styles";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
  variant?: "default" | "shadow" | "bordered";
}

export const Accordion = ({ children, label, ...rest }: AccordionProps) => {
  return (
    <AccordionItem {...rest}>
      <AccordianInput />
      <AccordionLabel>{label}</AccordionLabel>
      <AccordionWrapper>
        <AccordionContent>{children}</AccordionContent>
      </AccordionWrapper>
    </AccordionItem>
  );
};
