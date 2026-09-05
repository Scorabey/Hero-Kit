import {Wrapper} from "./style.ts";
import {Avatar} from "../Avatar";
import type { AvatarProps } from "../Avatar";

export type AvatarListType = Omit<AvatarProps, "size" | "variant" | "color" | "radius" | "isBordered">[]

export interface AvatarGroupProps extends Omit<AvatarProps, "src"> {
    visibleCount?: 4 | 5;
    avatarList: AvatarListType;
}

export const AvatarGroup = ({ avatarList, size, variant, isBordered, radius, color, ...rest}: AvatarGroupProps) => {
    return (
        <Wrapper {...rest}>
            {avatarList.map((avatar) => (
                <Avatar
                    key={avatar.id}
                    size={size}
                    variant={variant}
                    isBordered={isBordered}
                    radius={radius}
                    color={color}
                    {...avatar}
                />
            ))}
        </Wrapper>
    )
}