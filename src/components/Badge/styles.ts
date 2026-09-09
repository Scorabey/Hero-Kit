import styled, {css} from "styled-components";
import type { BadgeProps } from './index.tsx'
import type {ThemeType} from "../../variables/theme.ts";

const styledSize = {
    sm: (theme: ThemeType) => css`
        width: 16px;
        height: 16px;
        font-size: ${theme.text.text_tiny.fontSize};
        line-height: ${theme.text.text_tiny.lineHeight};
    `,
    md: (theme: ThemeType) => css`
        width: 20px;
        height: 20px;
        font-size: ${theme.text.text_small.fontSize};
        line-height: ${theme.text.text_small.lineHeight};
    `,
    lg: (theme: ThemeType) => css`
        width: 24px;
        height: 24px;
        font-size: ${theme.text.text_small.fontSize};
        line-height: ${theme.text.text_small.lineHeight};
    `,
}

const styledColor = {
    default: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.default};
        color: ${theme.colors.base["default-foreground"]};
    `,
    primary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.primary};
        color: ${theme.colors.base["primary-foreground"]};
    `,
    secondary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.secondary};
        color: ${theme.colors.base["secondary-foreground"]};
    `,
    warning: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.warning};
        color: ${theme.colors.base["warning-foreground"]};
    `,
    success: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.success};
        color: ${theme.colors.base["success-foreground"]};
    `,
    danger: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.danger};
        color: ${theme.colors.base["danger-foreground"]};
    `,
}

export const BadgeWrapper = styled.span<BadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.layout.radius.rounded_full}px;
    border-style: solid;
    border-width: 0;
    
    ${({ size, theme }) => size && styledSize[size](theme)}
    
    ${({ color, theme }) => color && styledColor[color](theme)}
`