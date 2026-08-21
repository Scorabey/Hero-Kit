import type { HTMLAttributes, ReactNode } from "react";
import {
  AccordionItem,
  AccordianInput,
  AccordionLabel,
  AccordionWrapper,
  AccordionContent,
} from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../variables/theme";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
  variant?: "default" | "shadow" | "bordered";
}

export const Accordion = ({ children, label, ...rest }: AccordionProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AccordionItem {...rest}>
        <AccordianInput />
        <AccordionLabel>{label}</AccordionLabel>
        <AccordionWrapper>
          <AccordionContent>{children}</AccordionContent>
        </AccordionWrapper>
      </AccordionItem>
    </ThemeProvider>
  );
};
