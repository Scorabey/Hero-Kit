import { type HTMLAttributes, useState, useEffect } from "react";
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

export type AlertRadiusSize = "none" | "sm" | "md" | "lg" | "full";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  duration?: number;
  color?: AlertColor;
  radiusSize?: AlertRadiusSize;
}

const MS_COUNT_IN_SECOND = 1000;

export const Alert = ({
  title,
  message,
  duration,
  color = "default",
  radiusSize = "none",
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen || duration === undefined) return;

    const timerId = setTimeout(() => {
      setIsOpen(false);
    }, duration * MS_COUNT_IN_SECOND);

    return () => clearTimeout(timerId);
  }, [isOpen, duration]);

  if (!isOpen) return null;

  return (
    <AlertWrapper $color={color} $radiusSize={radiusSize}>
      <AlertContent $color={color}>
        <div className="icon-wrapper">
          <AlertIcon color={color} />
        </div>
        <div className="content">
          <span className="title" title={title}>
            {title}
          </span>
          <span className="message" title={message}>
            {message}
          </span>
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
