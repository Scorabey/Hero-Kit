import { type HTMLAttributes } from "react";
import { AlertClose, AlertIcon } from "../../icons";
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
  onClose?: () => void;
}

export const Alert = ({
  title,
  message,
  color = "default",
  radiusSize = "none",
    onClose,
}: AlertProps) => {

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
        onClick={onClose}
      >
        <AlertClose />
      </button>
    </AlertWrapper>
  );
};
