import type {HTMLAttributes, ReactNode} from "react";
import type {ColorsType, RadiusType, SizeType, VariantType} from "../../types";
import { ButtonStyle } from "./styles.ts";
import {Spinner} from "../../icons";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: SizeType;
    radius?: RadiusType;
    colors?: ColorsType;
    variant?: VariantType;
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button = ({ children = "", size = "sm", radius = "sm", colors = "default", variant = "solid", isLoading = false, disabled, ...props }: ButtonProps) => {
    return (
        <ButtonStyle
            $size={size}
            $radius={radius}
            $colors={colors}
            $variant={variant}
            $isLoading={isLoading}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? <Spinner width={20} height={20} className={'spinner'}/> : null}
            {children}
        </ButtonStyle>
    )
}