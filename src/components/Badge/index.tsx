import type {HTMLAttributes} from "react";
import {BadgeWrapper} from "./styles.ts";
import type {ColorsType, SizeType, VariantType} from "../../types";

export type BadgeVariant = Omit<VariantType, 'bordered' | 'light' | 'ghost'>;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    count: number;
    size?: SizeType;
    color?: ColorsType;
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