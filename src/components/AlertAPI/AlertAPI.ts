import type { AlertColor, AlertProps } from "../Alert";

type AlertListener = (alert: AlertProps & { color: AlertColor }) => void;

const listeners = new Set<AlertListener>();

const notify = (color: AlertColor, options: AlertProps) => {
  listeners.forEach((listener) => {
    listener({
      color,
      ...options,
    });
  });
};

export const AlertAPI = {
  default(options: AlertProps) {
    notify("default", options);
  },
  primary(options: AlertProps) {
    notify("primary", options);
  },
  secondary(options: AlertProps) {
    notify("secondary", options);
  },
  success(options: AlertProps) {
    notify("success", options);
  },
  warning(options: AlertProps) {
    notify("warning", options);
  },
  danger(options: AlertProps) {
    notify("danger", options);
  },
  subscribe(listener: AlertListener) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },
};
