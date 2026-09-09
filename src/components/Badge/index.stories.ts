import {Badge} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    // tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Badge> = {
    args: {
        count: 1,
        size: 'sm',
        variant: 'solid',
        color: 'default',
        disableOutline: true,
    }
};