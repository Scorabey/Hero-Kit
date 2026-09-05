import {AvatarGroup, type AvatarListType} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AvatarGroup> = {
    title: "Components/AvatarGroup",
    component: AvatarGroup,
    // tags: ["autodocs"],
};

export default meta;

const avatars: AvatarListType = [
    { src: undefined, id: "01" },
    { src: undefined, id: "02" },
    { src: undefined, id: "03" },
    { src: undefined, id: "04" },
    { src: undefined, id: "05" },
]

export const Default: StoryObj<typeof AvatarGroup> = {
    render: () => {
        return (
            <AvatarGroup isBordered={false} radius={"full"} variant={"icon"} color={"default"} size={"sm"} avatarList={avatars}/>
        )
    }
};