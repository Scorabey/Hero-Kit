import { AvatarGroup } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AvatarGroup> = {
    title: "Components/AvatarGroup",
    component: AvatarGroup,
    // tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof AvatarGroup> = {
    args: {
        max: 4,
    },
};