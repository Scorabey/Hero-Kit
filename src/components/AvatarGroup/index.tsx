import {Wrapper} from "./style.ts";
import {Avatar} from "../Avatar";
import type { AvatarProps } from "../Avatar";

export type AvatarListType = Omit<AvatarProps, "size" | "color" | "radius" | "isBordered">[]

export interface AvatarGroupProps extends Omit<AvatarProps, "src"> {
    visibleCount?: 4 | 5;
    avatarList: AvatarListType;
}

export const AvatarGroup = ({ visibleCount = 4, avatarList, size, radius, color, ...rest}: AvatarGroupProps) => {
    const extraElements = avatarList.length - visibleCount;

    return (
        <Wrapper
            size={size}
            radius={radius}
            color={color}
            {...rest}
        >
            {avatarList.slice(0, visibleCount).map((avatar) => (
                <Avatar
                    key={avatar.id}
                    size={size}
                    variant={avatar.variant}
                    radius={radius}
                    color={color}
                />
            ))}
            {extraElements > 0 ? <div>+{extraElements}</div> : null}
        </Wrapper>
    )
}