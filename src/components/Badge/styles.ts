import styled, {css} from "styled-components";
import type {BadgeProps, BadgeVariant} from './index.tsx'
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
    default: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.default_flat : theme.colors.base.default};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base["default-foreground"] : theme.colors.base["default-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.light.shadowLg : null};
    `,
    primary: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.primary_flat : theme.colors.base.primary};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base.primary : theme.colors.base["primary-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.blue.shadowLg : null};
    `,
    secondary: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.secondary_flat : theme.colors.base.secondary};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base.secondary : theme.colors.base["secondary-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.purple.shadowLg : null};
    `,
    warning: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.warning_flat : theme.colors.base.warning};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base.warning : theme.colors.base["warning-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.orange.shadowLg : null};
    `,
    success: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.success_flat : theme.colors.base.success};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base.success : theme.colors.base["success-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.green.shadowLg : null};
    `,
    danger: (theme: ThemeType, variant: BadgeVariant) => css`
        background-color: ${variant === "faded" ? theme.colors.base["default-100"] : variant === "flat" ? theme.colors.flat.danger_flat : theme.colors.base.danger};
        color: ${variant === "faded" || variant === "flat" ? theme.colors.base.danger : theme.colors.base["danger-foreground"]};
        box-shadow: ${variant === "shadow" ? theme.shadow.red.shadowLg : null};
    `,
}

export const BadgeWrapper = styled.span<BadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.layout.radius.rounded_full}px;
    border-style: solid;
    border-width: ${({ disableOutline }) => disableOutline ? 2 : 0}px;
    border-color: ${({ disableOutline, variant, theme }) => disableOutline ? variant === "faded" ? theme.colors.base.default : theme.colors.layout.background : theme.colors.layout.background};
    
    ${({ size, theme }) => size && styledSize[size](theme)}
    
    ${({ color, variant, theme }) => color && variant ? styledColor[color](theme, variant) : null}
`