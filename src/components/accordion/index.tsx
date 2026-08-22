import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import {
  AccordionItem,
  AccordianInput,
  AccordionLabel,
  AccordionWrapper,
  AccordionContent,
} from "./styles";
import { Arrow } from "../../icons";

export interface AccordionProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  label: string;
  description?: string;
  variant?: "default" | "shadow" | "bordered";
}

export const Accordion = ({
  children,
  label,
  description,
  ...rest
}: AccordionProps) => {
  const uniqId = useId();

  return (
    <AccordionItem>
      <AccordianInput type="checkbox" id={uniqId} {...rest} />
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
