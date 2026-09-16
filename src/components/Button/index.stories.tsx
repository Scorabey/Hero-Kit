import {Button} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' }
        },
        radius: {
            options: ['none', 'sm', 'md', 'lg', 'full'],
            control: { type: 'radio' }
        },
        colors: {
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            control: { type: 'select' }
        },
        variant: {
            options: ['solid', 'bordered', 'light', 'flat', 'faded', 'ghost', 'shadow'],
            control: { type: 'select' }
        },
    },
    args: {
        size: 'md',
        colors: 'default',
        radius: 'sm',
        variant: 'shadow',
        children: 'Click!',
    },
    // tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Button> = {
    render: (args) => {
        return (
            <Button {...args} />
        )
    }
};