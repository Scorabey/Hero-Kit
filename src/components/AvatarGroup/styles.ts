import styled, {css} from "styled-components";
import {AvatarColor, AvatarRadius, AvatarSize} from "../Avatar/styles.ts";
import type {ThemeType} from "../../variables/theme.ts";
import type {AvatarColorType} from "../Avatar";

export interface AvatarGroupStyles {
    $size: "sm" | "md" | "lg";
    $radius: "none" | "sm" | "md" | "lg" | "full";
    $isGrid: boolean;
    $color: AvatarColorType;
}

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

const isGridLayout = {
    grid: css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    `,
    flex: css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `
}

export const Wrapper = styled.div<AvatarGroupStyles>`
    width: fit-content;
    height: fit-content;
    gap: ${({ $isGrid }) => $isGrid ? `4px` : 0};
    
    ${({ $isGrid }) => $isGrid ? isGridLayout.grid : isGridLayout.flex}
        
    .border {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-style: solid;
        
        ${({ theme, $radius }) => $radius && AvatarRadius[$radius](theme)}
        
        ${({ theme, $color }) => $color && BorderColor[$color](theme)};
        
        div {
            border: 2px solid ${({ theme }) => theme.colors.layout.background};
        }
    }
    
    .border:not(:first-child) {
        margin-left: ${({ $isGrid }) => $isGrid ? 0 : "-10px"};
    }
    
    span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.layout.background};

        ${({ $size, theme }) => $size && AvatarSize[$size](theme)}

        ${({ $color, theme }) => $color && AvatarColor[$color](theme)}

        ${({ $radius, theme }) => $radius && AvatarRadius[$radius](theme)}
    }
`