import type {HTMLAttributes} from "react";
import {Wrapper} from "./style.ts";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    max?: 4 | 5;
}

export const AvatarGroup = ({ max = 4, ...rest}: AvatarGroupProps) => {
    return (
        <Wrapper max={max} {...rest}>

        </Wrapper>
    )
}