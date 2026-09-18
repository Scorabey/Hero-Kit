import {AvatarWrapper} from "./styles.ts";
import {AvatarIcon} from "../../icons/Avatar/Avatar.tsx";
import type {HTMLAttributes} from "react";
import type {ColorsType, RadiusType, SizeType} from "../../types";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    size?: SizeType;
    radius?: RadiusType;
    color?: ColorsType;
    variant?: "icon" | "image"
    isBordered?: boolean
    src?: string;
}

export const Avatar = ({ size = "md", src, color = "default", radius = "md", variant = "icon", isBordered = false, ...rest  }: AvatarProps) => {

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