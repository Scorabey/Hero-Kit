import type { HTMLAttributes } from "react";
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
}

export const Alert = ({ title, message, color = "default" }: AlertProps) => {
  return (
    <AlertWrapper $color={color}>
      <AlertContent>
        <div className="icon-wrapper">
          <AlertIcon color={color} />
        </div>
        <div>
          {title}
          {message}
        </div>
      </AlertContent>
      <button type="button" aria-controls="accordion-content">
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
