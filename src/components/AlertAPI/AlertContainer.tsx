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
      const newAlert = {
        ...alert,
        id: crypto.randomUUID(),
      };

      setAlerts((prev) => [...prev, newAlert]);

      if (alert.duration) {
        setTimeout(() => {
          setAlerts((prev) =>
              prev.filter((item) => item.id !== newAlert.id),
          );
        }, alert.duration);
      }
    });
  }, []);

  const handleClose = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }

  return (
    <Wrapper>
      {alerts.map((alert) => (
        <Alert
            key={alert.id}
            onClose={() => handleClose(alert.id)}
            {...alert} />
      ))}
    </Wrapper>
  );
};
