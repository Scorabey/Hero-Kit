import styled, {css} from "styled-components";
import type {ColorsType, RadiusType, SizeType, VariantType} from "../../types";
import type {ThemeType} from "../../variables/theme.ts";

interface ButtonProps {
    $size?: SizeType;
    $radius?: RadiusType;
    $colors?: ColorsType;
    $variant?: VariantType;
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

export const ButtonStyle = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 2px;
    border-color: transparent;
    
    ${({ $size, theme }) => $size && SizeSelector[$size](theme)}
`