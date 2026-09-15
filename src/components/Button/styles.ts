import styled from "styled-components";
import type {ColorsType, RadiusType, SizeType, VariantType} from "../../types";

interface ButtonProps {
    $size?: SizeType;
    $radius?: RadiusType;
    $colors?: ColorsType;
    $variant?: VariantType;
}

export const ButtonStyle = styled.button<ButtonProps>``