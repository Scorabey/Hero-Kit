import { useEffect, useState } from "react";
import { Alert, type AlertColor, type AlertProps } from "../Alert";
import { AlertAPI } from "./AlertAPI.ts";
import { Wrapper } from "./styles.ts";

interface AlertData extends AlertProps {
  id: string;
  color: AlertColor;
}

export const AlertContainer = () => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  useEffect(() => {
    return AlertAPI.subscribe((alert) => {
      setAlerts((prev) => [
        ...prev,
        {
          ...alert,
          id: crypto.randomUUID(),
        },
      ]);
    });
  }, []);

  return (
    <Wrapper>
      {alerts.map((alert) => (
        <Alert key={alert.id} {...alert} />
      ))}
    </Wrapper>
  );
};
