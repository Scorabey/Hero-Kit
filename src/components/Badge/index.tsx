import type {HTMLAttributes} from "react";
import {BadgeWrapper} from "./styles.ts";

export type Size = 'sm' | 'md' | 'lg';

export type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type BadgeVariant = 'solid' | 'flat' | 'faded' | 'shadow';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    count: number;
    size?: Size;
    color?: Color;
    variant?: BadgeVariant;
    disableOutline?: boolean;
}

export const Badge = ({ count = 1, size = 'sm', color = 'default', variant = 'solid', disableOutline = true }: BadgeProps) => {
    const currentCount = count > 99 ? '+99' : count;

    return (
        <BadgeWrapper
            size={size}
            color={color}
            variant={variant}
            disableOutline={disableOutline}
            count={count}
        >
            {currentCount}
        </BadgeWrapper>
    )
}