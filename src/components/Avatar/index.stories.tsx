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
        variant: 'icon',
        src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg",
    },
};

export const Image: StoryObj<typeof Avatar> = {
    args: {
        size: 'md',
        radius: 'none',
        color: 'default',
        variant: 'image',
        src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg",
    },
};

