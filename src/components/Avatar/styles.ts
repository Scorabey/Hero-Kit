import styled from 'styled-components'
import type { AvatarProps } from "./index.tsx";

export const AvatarWrapper = styled.div<AvatarProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    background: ${({ theme }) => theme.colors.base.default};
    
    svg {
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.colors.base["default-foreground"]};
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;