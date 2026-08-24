import { type HTMLAttributes, useState } from "react";
import {
  AlertSuccess,
  AlertDanger,
  AlertInfo,
  AlertWarning,
  AlertClose,
} from "../../icons";
import { AlertContent, AlertWrapper } from "./styles.ts";

export type AlertColor =
  "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  color?: AlertColor;
  radiusSize?: "none" | "sm" | "md" | "lg" | "full";
}

export const Alert = ({
  title,
  message,
  color = "default",
  radiusSize = "none",
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <AlertWrapper $color={color} $radiusSize={radiusSize}>
      <AlertContent $color={color}>
        <div className="icon-wrapper">
          <AlertIcon color={color} />
        </div>
        <div className="content">
          <span className="title">{title}</span>
          <span className="message">{message}</span>
        </div>
      </AlertContent>
      <button
        type="button"
        aria-controls="accordion-content"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlertClose />
      </button>
    </AlertWrapper>
  );
};

const AlertIcon = ({ color }: { color: AlertColor }) => {
  switch (color) {
    case "success":
      return <AlertSuccess />;
    case "warning":
      return <AlertWarning />;
    case "danger":
      return <AlertDanger />;
    default:
      return <AlertInfo />;
  }
};
