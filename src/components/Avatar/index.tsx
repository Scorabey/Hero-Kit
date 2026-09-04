export interface AvatarProps {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
    variant?: "default" | "image";
    isBordered?: boolean;
}

export const Avatar = () => {
    return (
        <AvatarWrapper></AvatarWrapper>
    )
}