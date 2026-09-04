import {AvatarWrapper} from "./styles.ts";
import {AvatarIcon} from "../../icons/Avatar/Avatar.tsx";

export interface AvatarProps {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
    isBordered?: boolean;
    src?: string | null;
}

export const Avatar = ({ size, src = null, variant, radius, isBordered  }: AvatarProps) => {
    function AvatarContent(src: string | null) {
        if(!src) {
            return <AvatarIcon />
        } else {
            return <img src={src} alt={"Avatar"} />
        }

    }

    return (
        <AvatarWrapper size={size} variant={variant} radius={radius} isBordered={isBordered} src={src}>
            {AvatarContent(src)}
        </AvatarWrapper>
    )
}