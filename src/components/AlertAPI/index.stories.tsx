import { AlertAPI } from "./AlertAPI";
import { AlertContainer } from "./AlertContainer.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AlertContainer> = {
  component: AlertContainer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <button
        onClick={() =>
          AlertAPI.success({
            title: "Success",
            message: "User successfully created",
            radiusSize: "md",
            duration: 4000,
          })
        }
      >
        Success
      </button>

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

      <AlertContainer />
    </>
  ),
};
