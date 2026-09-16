import {Badge} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {ColorStory, ExcludeStoryOptions, VariantStory, type VariantType} from "../../types";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    // tags: ["autodocs"],
    argTypes: {
        count: {
            control: { type: 'number' }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' }
        },
        variant: {
            options: ExcludeStoryOptions<VariantType>(VariantStory, ['bordered', 'light', 'ghost']),
            control: { type: 'select' }
        },
        color: {
            options: ColorStory,
            control: { type: 'select' }
        },
        disableOutline: {
            control: { type: 'boolean' }
        },
    },
    args: {
        count: 1,
        size: 'sm',
        variant: 'solid',
        color: 'default',
        disableOutline: true,
    }
};

export default meta;

export const Default: StoryObj<typeof Badge> = {};