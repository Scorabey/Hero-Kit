import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
    
    div:not(:first-child) {
        margin-left: -0.5rem;
    }
`