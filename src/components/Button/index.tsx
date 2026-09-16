import type {HTMLAttributes, ReactNode} from "react";
import type {ColorsType, RadiusType, SizeType, VariantType} from "../../types";
import { ButtonStyle } from "./styles.ts";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: SizeType;
    radius?: RadiusType;
    colors?: ColorsType;
    variant?: VariantType;
}

export const Button = ({ children = "", size = "sm", radius = "sm", colors = "default", variant = "solid", ...props }: ButtonProps) => {
    return (
        <ButtonStyle
            $size={size}
            $radius={radius}
            $colors={colors}
            $variant={variant}
            {...props}
        >
            {children}
        </ButtonStyle>
    )
}