import {AvatarGroup, type AvatarListType} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AvatarGroup> = {
    title: "Components/AvatarGroup",
    component: AvatarGroup,
    // tags: ["autodocs"],
};

export default meta;

const avatars: AvatarListType = [
    { variant: "icon", src: undefined, id: "01" },
    { variant: "icon", src: undefined, id: "02" },
    { variant: "icon", src: undefined, id: "03" },
    { variant: "icon", src: undefined, id: "04" },
    { variant: "icon", src: undefined, id: "06" },
    { variant: "icon", src: undefined, id: "07" },
    { variant: "icon", src: undefined, id: "08" },
    { variant: "icon", src: undefined, id: "09" },
    { variant: "icon", src: undefined, id: "10" },
    { variant: "icon", src: undefined, id: "11" },
    { variant: "icon", src: undefined, id: "12" },
]

export const Default: StoryObj<typeof AvatarGroup> = {
    args: {
        visibleCount: 4,
        avatarList: avatars,
        color: "default",
        radius: "md",
        size: "lg",
    }
};