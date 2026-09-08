import {Wrapper} from "./styles.ts";
import {Avatar} from "../Avatar";
import type { AvatarProps } from "../Avatar";

export type AvatarListType = Omit<AvatarProps, "size" | "color" | "radius" | "isBordered">[]

export interface AvatarGroupProps extends Omit<AvatarProps, "src"> {
    visibleCount?: 4 | 5;
    isGrid: boolean;
    avatarList: AvatarListType;
}

export const AvatarGroup = ({ visibleCount = 4, isGrid = false, avatarList, size = "md", radius = "md", color = "default", ...rest}: AvatarGroupProps) => {
    const extraElements = avatarList.length - visibleCount;

    return (
        <Wrapper
            $size={size}
            $radius={radius}
            $color={color}
            $isGrid={isGrid}
            {...rest}
        >
            {avatarList.slice(0, visibleCount).map((avatar, index) => (
                <div
                    className="border"
                    style={{
                        zIndex: index
                    }}>
                    <Avatar
                        key={avatar.id}
                        size={size}
                        variant={avatar.variant}
                        radius={radius}
                        color={color}
                        src={avatar.src}
                    />
                </div>
            ))}
            {extraElements > 0 ? <div style={{zIndex: visibleCount}} className="border"><span>+{extraElements}</span></div> : null}
        </Wrapper>
    )
}