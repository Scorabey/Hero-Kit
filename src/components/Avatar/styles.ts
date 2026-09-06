import styled, { css } from 'styled-components'
import type { AvatarProps } from "./index.tsx";
import type {ThemeType} from "../../variables/theme.ts";

export const AvatarSize = {
    sm: (theme: ThemeType) => css`
        width: clamp(32px, 2.22vw, 32px);
        height: clamp(32px, 2.22vh, 32px);
        padding: 0.21rem;
        font-size: ${theme.text.text_tiny.fontSize};
        line-height: ${theme.text.text_tiny.lineHeight};
    `,
    md: (theme: ThemeType) => css`
        width: clamp(40px, 2.78vw, 40px);
        height: clamp(40px, 2.78vh, 40px);
        padding: 0.25rem;
        font-size: ${theme.text.text_tiny.fontSize};
        line-height: ${theme.text.text_tiny.lineHeight};
    `,
    lg: (theme: ThemeType) => css`
        width: clamp(56px, 3.89vw, 56px);
        height: clamp(56px, 3.89vh, 56px);
        padding: 0.35rem;
        font-size: ${theme.text.text_small.fontSize};
        line-height: ${theme.text.text_small.lineHeight};
    `,
}

export const AvatarColor = {
    primary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.primary};
        color: ${theme.colors.base["primary-foreground"]};
        
        svg {
            fill: ${theme.colors.base["primary-foreground"]};
        }
    `,
    secondary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.secondary};
        color: ${theme.colors.base["secondary-foreground"]};
        
        svg {
            fill: ${theme.colors.base["secondary-foreground"]};
        }
    `,
    success: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.success};
        color: ${theme.colors.base["success-foreground"]};
        
        svg {
            fill: ${theme.colors.base["success-foreground"]};
        }
    `,
    warning: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.warning};
        color: ${theme.colors.base["warning-foreground"]};
        
        svg {
            fill: ${theme.colors.base["warning-foreground"]};
        }
    `,
    danger: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.danger};
        color: ${theme.colors.base["danger-foreground"]};
        
        svg {
            fill: ${theme.colors.base["danger-foreground"]};
        }
    `,
    default: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.default};
        color: ${theme.colors.base["default-foreground"]};
        
        svg {
            fill: ${theme.colors.base["default-foreground"]};
        }
    `,
}

export const AvatarRadius = {
    none: () => css`
        border-radius: 0;
        
        img {
            border-radius: 0;
        }
    `,
    sm: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_small}px;
        
        img {
            border-radius: ${theme.layout.radius.rounded_small}px;
        }
    `,
    md: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_medium}px;
        
        img {
            border-radius: ${theme.layout.radius.rounded_medium}px;
        }
    `,
    lg: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_large}px;
        
        img {
            border-radius: ${theme.layout.radius.rounded_large}px;
        }
    `,
    full: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_full}px;
        
        img {
            border-radius: ${theme.layout.radius.rounded_full}px;
        }
    `,
}

const AvatarVariant = {
    icon: () => css`
        
    `,
    image: () => css`
        padding: 0;
    `
}

export const AvatarWrapper = styled.div<AvatarProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-width: ${({isBordered}) => isBordered ? 4 : 0}px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.base.default};
    
    svg {
        width: 100%;
        height: 100%;
    }
    
    img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    
    ${({ size, theme }) => size && AvatarSize[size](theme)}

    ${({ color, theme }) => color && AvatarColor[color](theme)}

    ${({ radius, theme }) => radius && AvatarRadius[radius](theme)}

    ${({ variant }) => variant && AvatarVariant[variant]()}
`;