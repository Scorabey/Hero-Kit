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
        size: 'md',
        radius: 'none',
        color: 'default',
    },
};

export const Image: StoryObj<typeof Avatar> = {
    args: {
        size: 'md',
        radius: 'none',
        color: 'default',
        variant: 'image',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGmUeiHE2SfkUtPJSQDj2Z5MIA3ai9bbG9bPRp-z-qQ&s=10",
    },
};

