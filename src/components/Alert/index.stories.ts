import { Alert } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {ColorStory, RadiusStory} from "../../types";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  // tags: ["autodocs"],
  argTypes: {
    title: {
      control: 'text'
    },
    message: {
      control: 'text'
    },
    color: {
      options: ColorStory,
      control: { type: 'select' }
    },
    radiusSize: {
      options: RadiusStory,
      control: { type: 'radio' }
    },
    duration: {
      control: { type: 'number' }
    }
  },
  args: {
    title: "New update available",
    message: "A new version of the application is available. Refresh the page to get the latest version",
    color: "default",
    radiusSize: "md",
  }
};

export default meta;

export const Default: StoryObj<typeof Alert> = {};

export const Primary: StoryObj<typeof Alert> = {
  args: {
    color: "primary",
    radiusSize: "md",
  },
};

export const Secondary: StoryObj<typeof Alert> = {
  args: {
    color: "secondary",
    radiusSize: "md",
  },
};

export const Success: StoryObj<typeof Alert> = {
  args: {
    title: "Operation successful",
    message: "Your changes have been saved successfully.",
    color: "success",
    radiusSize: "md",
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    title: "Unsaved changes",
    message:
      "You have unsaved changes. Please save them before leaving the page.",
    color: "warning",
    radiusSize: "md",
  },
};

export const Danger: StoryObj<typeof Alert> = {
  args: {
    title: "Something went wrong",
    message: "We couldn't complete your request. Please try again later.",
    color: "danger",
    radiusSize: "md",
  },
};
