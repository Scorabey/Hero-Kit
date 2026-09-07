import {AvatarGroup, type AvatarListType} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AvatarGroup> = {
    title: "Components/AvatarGroup",
    component: AvatarGroup,
    // tags: ["autodocs"],
};

export default meta;

const avatars: AvatarListType = [
    { variant: "icon", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "01" },
    { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "02" },
    { variant: "icon", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "03" },
    { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "04" },
    { variant: "image", src: "https://i.pinimg.com/1200x/54/14/5e/54145e44e946d42c4556ca0485b9fb29.jpg", id: "05" },
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