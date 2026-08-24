import { Alert } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Alert> = {
  args: {
    title: "Default",
    message: "This is default alert message",
    color: "default",
    radiusSize: "md",
  },
};
