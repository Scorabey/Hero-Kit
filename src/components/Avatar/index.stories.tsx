import { Avatar } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {ColorStory, RadiusStory, SizeStory} from "../../types";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    // tags: ["autodocs"],
    argTypes: {
        size: {
            options: SizeStory,
            control: { type: 'radio' }
        },
        radius: {
            options: RadiusStory,
            control: { type: 'radio' }
        },
        color: {
            options: ColorStory,
            control: { type: 'select' }
        },
        variant: {
            options: ['icon', 'image'],
            control: { type: 'radio' }
        },
        src: {
            control: { type: 'text' }
        },
        isBordered: {
            control: { type: 'boolean' }
        }
    },
    args: {
        size: 'md',
        radius: 'none',
        color: 'default',
        variant: 'icon',
        src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg",
        isBordered: false
    },
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {};

export const Image: StoryObj<typeof Avatar> = {
    args: {
        size: 'md',
        radius: 'none',
        color: 'default',
        variant: 'image',
        src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg",
        isBordered: false
    },
};

