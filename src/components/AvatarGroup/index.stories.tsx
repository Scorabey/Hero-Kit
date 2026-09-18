import {AvatarGroup, type AvatarListType} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {ColorStory, RadiusStory, SizeStory} from "../../types";

const meta: Meta<typeof AvatarGroup> = {
    title: "Components/AvatarGroup",
    component: AvatarGroup,
    // tags: ["autodocs"],
    argTypes: {
        visibleCount: {
            options: [4, 5],
            control: {type: 'radio'}
        },
        isGrid: {
            control: {type: 'boolean'}
        },
        color: {
            options: ColorStory,
            control: {type: 'select'}
        },
        size: {
            options: SizeStory,
            control: {type: 'radio'}
        },
        radius: {
            options: RadiusStory,
            control: {type: 'radio'}
        },
        avatarList: {
            control: {type: 'object'}
        },
    },
    args: {
        avatarList: [
            { variant: "icon", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "01" },
            { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "02" },
            { variant: "icon", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "03" },
            { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "04" },
            { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "05" },
            { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "06" },
        ] as AvatarListType,
        visibleCount: 4,
        color: "default",
        radius: "md",
        size: "lg",
        isGrid: true,
    }
};

export default meta;

export const Default: StoryObj<typeof AvatarGroup> = {};