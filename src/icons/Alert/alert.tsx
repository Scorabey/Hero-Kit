import { AlertWarning } from "./warning.tsx";
import { AlertSuccess } from "./success.tsx";
import { AlertInfo } from "./info.tsx";
import { AlertDanger } from "./danger.tsx";
import type { AlertColor } from "../../components/Alert";

export const AlertIcon = ({ color }: { color: AlertColor }) => {
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
