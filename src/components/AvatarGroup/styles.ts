import styled, {css} from "styled-components";
import type {AvatarProps} from "../Avatar";
import {AvatarColor, AvatarRadius, AvatarSize} from "../Avatar/styles.ts";
import type {ThemeType} from "../../variables/theme.ts";

const BorderColor = {
    default: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.default};
    `,
    primary: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.primary};
    `,
    secondary: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.secondary};
    `,
    success: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.success};
    `,
    warning: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.warning};
    `,
    danger: (theme: ThemeType) => css`
        border-color: ${theme.colors.base.danger};
    `,
}

export const Wrapper = styled.div<AvatarProps>`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
        
    .border {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-style: solid;
        
        ${({ theme, radius }) => radius && AvatarRadius[radius](theme)}
        
        ${({ theme, color }) => color && BorderColor[color](theme)};
        
        div {
            border: 2px solid ${({ theme }) => theme.colors.layout.background};
        }
    }
    
    .border:not(:first-child) {
        margin-left: -10px;
    }
    span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.layout.background};

        ${({ size, theme }) => size && AvatarSize[size](theme)}

        ${({ color, theme }) => color && AvatarColor[color](theme)}

        ${({ radius, theme }) => radius && AvatarRadius[radius](theme)}
    }
`