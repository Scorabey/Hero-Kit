import styled from "styled-components";
import type {AvatarProps} from "../Avatar";
import {AvatarColor, AvatarRadius, AvatarSize} from "../Avatar/styles.ts";

export const Wrapper = styled.div<AvatarProps>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
    
    div:not(:first-child) {
        margin-left: -0.5rem;
    }
    div:last-child {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-width: ${({isBordered}) => isBordered ? 4 : 0}px;
        border-style: solid;
        border-color: ${({theme}) => theme.colors.base.default};
        
        ${({ size, theme }) => size && AvatarSize[size](theme)}

        ${({ color, theme }) => color && AvatarColor[color](theme)}

        ${({ radius, theme }) => radius && AvatarRadius[radius](theme)}
    }
`