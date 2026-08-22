import { Accordion } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Accordion> = {
  args: {
    variant: "default",
    label: "Title",
    description: "Press to expand",
  },
};
