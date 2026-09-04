import { AlertAPI } from "./AlertAPI";
import { AlertContainer } from "./AlertContainer.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AlertContainer> = {
    title: "Components/Alert Container",
    component: AlertContainer,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Demonstrates all Alert variants using the imperative AlertAPI.
 *
 * Unlike stories that render the component directly via <Alert />,
 * this example calls Alert programmatically through AlertAPI.success/danger/warning —
 * the way it would typically be used in a real app (e.g. after a server request,
 * inside a form submit handler, etc.)
 *
 * AlertContainer is required — it acts as a "portal" where AlertAPI renders
 * the alerts. Without it, AlertAPI calls won't display anything on screen.
 */

export const Default: Story = {
  render: () => (
    <>
        {/* Triggers a success alert.
          duration: 4000 — the alert auto-dismisses after 4 seconds. */}
      <button
        onClick={() =>
          AlertAPI.success({
            title: "Success",
            message: "User successfully created",
            radiusSize: "md", // corner radius of the alert
            duration: 4000, // display time in ms
          })
        }
      >
        Success
      </button>

        {/* Error alert — "danger" variant */}
      <button
        onClick={() =>
          AlertAPI.danger({
            title: "Error",
            message: "Something went wrong",
            radiusSize: "md",
            duration: 4000,
          })
        }
      >
        Error
      </button>

        {/* Warning alert — "warning" variant */}
      <button
        onClick={() =>
          AlertAPI.warning({
            title: "Warning",
            message: "Downloading file has stopped",
            radiusSize: "md",
            duration: 4000,
          })
        }
      >
        Warning
      </button>

        {/* Container where AlertAPI mounts all active alerts.
          Should be rendered once per app (typically in the root/layout). */}
      <AlertContainer />
    </>
  ),
};
