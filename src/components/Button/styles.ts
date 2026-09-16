import styled, {css} from "styled-components";
import type {ColorsType, RadiusType, SizeType, VariantType} from "../../types";
import type {ThemeType} from "../../variables/theme.ts";

interface ButtonProps {
    $size: SizeType;
    $radius: RadiusType;
    $colors: ColorsType;
    $variant: VariantType;
}

const RadiusSelector = {
    none: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_none}px;
    `,
    sm: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_small}px;
    `,
    md: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_medium}px;
    `,
    lg: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_large}px;
    `,
    full: (theme: ThemeType) => css`
        border-radius: ${theme.layout.radius.rounded_full}px;
    `,
}

const SizeSelector = {
    sm: (theme: ThemeType) => css`
        padding-inline: 0.75rem;
        padding-block: 0.5rem;
        font-size: ${theme.text.text_tiny.fontSize};
        line-height: ${theme.text.text_tiny.lineHeight};
        
        &:has(> svg:only-child) {
            padding: 0.375rem;
        }
    `,
    md: (theme: ThemeType) => css`
        padding-inline: 1rem;
        padding-block: 0.625rem;
        font-size: ${theme.text.text_small.fontSize};
        line-height: ${theme.text.text_small.lineHeight};
        
        &:has(> svg:only-child) {
            padding: 0.625rem;
        }
    `,
    lg: (theme: ThemeType) => css`
        padding-inline: 1.5rem;
        padding-block: 0.75rem;
        font-size: ${theme.text.text_medium.fontSize};
        line-height: ${theme.text.text_medium.lineHeight};
        
        &:has(> svg:only-child) {
            padding: 0.875rem;
        }
    `,
}

const ColorSelector = {
    default: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.default};
        border-color: ${theme.colors.base.default};
        color: ${theme.colors.base["default-foreground"]};
        box-shadow: ${theme.shadow.light.shadowLg};
        
        svg {
            fill: ${theme.colors.base["default-foreground"]};
            
            path {
                fill-color: ${theme.colors.base["default-foreground"]};
            }
        }
    `,
    primary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.primary};
        border-color: ${theme.colors.base.primary};
        color: ${theme.colors.base["primary-foreground"]};
        box-shadow: ${theme.shadow.blue.shadowLg};
        
        svg {
            fill: ${theme.colors.base["primary-foreground"]};

            path {
                fill-color: ${theme.colors.base["primary-foreground"]};
            }
        }
    `,
    secondary: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.secondary};
        border-color: ${theme.colors.base.secondary};
        color: ${theme.colors.base["secondary-foreground"]};
        box-shadow: ${theme.shadow.purple.shadowLg};
        
        svg {
            fill: ${theme.colors.base["secondary-foreground"]};
            
            path {
                fill-color: ${theme.colors.base["secondary-foreground"]};
            }
        }
    `,
    success: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.success};
        border-color: ${theme.colors.base.success};
        color: ${theme.colors.base["success-foreground"]};
        box-shadow: ${theme.shadow.green.shadowLg};
        
        svg {
            fill: ${theme.colors.base["success-foreground"]};
            
            path {
                fill-color: ${theme.colors.base["success-foreground"]};
            }
        }
    `,
    warning: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.warning};
        border-color: ${theme.colors.base.warning};
        color: ${theme.colors.base["default-foreground"]};
        box-shadow: ${theme.shadow.orange.shadowLg};
        
        svg {
            fill: ${theme.colors.base["default-foreground"]};
            
            path {
                fill-color: ${theme.colors.base["default-foreground"]};
            }
        }
    `,
    danger: (theme: ThemeType) => css`
        background-color: ${theme.colors.base.danger};
        border-color: ${theme.colors.base.danger};
        color: ${theme.colors.base["danger-foreground"]};
        box-shadow: ${theme.shadow.red.shadowLg};
        
        svg {
            fill: ${theme.colors.base["danger-foreground"]};
            
            path {
                fill-color: ${theme.colors.base["danger-foreground"]};
            }
        }
    `,
}

const VariantSelector = {
    solid: () => css`
        border-width: 0;
        box-shadow: none;
    `,
    bordered: (theme: ThemeType, color: ColorsType) => css`
        border-width: 2px;
        border-color: ${color === 'default' ? theme.colors.base["default"] : theme.colors.base[color]};
        box-shadow: none;
        background: transparent;
        color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};

        svg {
            fill: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};

            path {
                fill-color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
            }
        }
    `,
    light: (theme: ThemeType, color: ColorsType) => css`
        border-width: 0;
        box-shadow: none;
        background: transparent;
        color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
        
        svg {
            fill: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
            
            path {
                fill-color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
            }
        }
    `,
    flat: (theme: ThemeType, color: ColorsType) => css`
        border-width: 0;
        box-shadow: none;
        background-color: ${theme.colors.flat[`${color}-flat`]};
        color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
        
        svg {
            fill: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};

            path {
                fill-color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
            }
        }
    `,
    faded: (theme: ThemeType, color: ColorsType) => css`
        border-width: 2px;
        border-color: ${theme.colors.base.default};
        box-shadow: none;
        background-color: ${theme.colors.base["default-100"]};
        color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
        
        svg {
            fill: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};

            path {
                fill-color: ${color === 'default' ? theme.colors.base["default-foreground"] : theme.colors.base[color]};
            }
        }
    `,
    shadow: (theme: ThemeType, color: ColorsType) => css`
        border-width: 0;
        background-color: ${color === 'default' ? theme.colors.base["default-100"] : theme.colors.base[color]};
    `,
    ghost: (theme: ThemeType, color: ColorsType) => css`
        ${VariantSelector.bordered(theme, color)}
    `,
}

export const ButtonStyle = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 0;
    border-color: transparent;
    cursor: pointer;
    box-sizing: border-box;
    
    &:active {
        transform: scale(1.025);
    }
    
    ${({ $size, theme }) => $size && SizeSelector[$size](theme)}

    ${({ $radius, theme }) => $radius && RadiusSelector[$radius](theme)}

    ${({ $colors, theme }) => $colors && ColorSelector[$colors](theme)}
    
    ${({ $variant, $colors, theme  }) => $variant && VariantSelector[$variant](theme, $colors)}
`