import {AvatarWrapper} from "./styles.ts";
import {AvatarIcon} from "../../icons/Avatar/Avatar.tsx";
import type {HTMLAttributes} from "react";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
    variant?: "icon" | "image"
    isBordered?: boolean
    src?: string;
}

export const Avatar = ({ size, src, color, radius, variant, isBordered, ...rest  }: AvatarProps) => {

    return (
        <AvatarWrapper size={size} color={color} radius={radius} variant={variant} isBordered={isBordered} {...rest}>
            {
                variant === "icon"
                ? <AvatarIcon />
                : <img src={src} alt={"Avatar"}/>
            }
        </AvatarWrapper>
    )
}