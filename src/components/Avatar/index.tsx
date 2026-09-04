import {AvatarWrapper} from "./styles.ts";
import {AvatarIcon} from "../../icons/Avatar/Avatar.tsx";

export interface AvatarProps {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
    variant?: "icon" | "image"
    isBordered?: boolean
    src?: string;
}

export const Avatar = ({ size, src, color, radius, variant, isBordered  }: AvatarProps) => {

    return (
        <AvatarWrapper size={size} color={color} radius={radius} variant={variant} isBordered={isBordered}>
            {
                variant === "icon"
                ? <AvatarIcon />
                : <img src={src} alt={"Avatar"}/>
            }
        </AvatarWrapper>
    )
}