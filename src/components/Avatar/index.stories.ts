import { Avatar } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    // tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {
    args: {

    },
};