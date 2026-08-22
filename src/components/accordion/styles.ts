import styled, { css } from "styled-components";

export const AccordionWrapper = styled.div`
    display: inline-flex;
    overflow: hidden;
    max-height: 0;
    min-width: 100%;
    transition: 
        max-height 0.35s ease;
`;

export const AccordionContent = styled.div`
    ${({ theme }) => {
      return css`
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        padding-block: 8px;
        min-width: 100%;
        min-height: fit-content;
        color: ${theme.colors.layout.foreground};
        font-size: ${theme.text.text_medium.fontSize}px;
        line-height: ${theme.text.text_medium.lineHeight}px;
      `
    }}
`;

export const AccordionItem = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background-color: transparent;
    box-sizing: border-box;
    padding-inline: 8px;
    width: 436px;
    height: fit-content;
    font-family: Inter;
`;

export const AccordionLabel = styled.label`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block: 16px;
      width: 100%;
      cursor: pointer;

      div {
        display: inline-flex;
        flex-direction: column;

        span:nth-child(1) {
          color: ${theme.colors.layout.foreground};
          font-size: ${theme.text.text_large.fontSize}px;
          line-height: ${theme.text.text_large.lineHeight}px;
          font-weight: 600;
        }
        span:nth-child(2) {
          color: ${theme.colors.layout["foreground-500"]};
          font-size: ${theme.text.text_large.fontSize}px;
          line-height: ${theme.text.text_large.lineHeight}px;
          font-weight: 400;
        }
      }

      svg {
        padding-left: 12px;
        fill-color: ${theme.colors.base["default-400"]};
        transition: transform 0.2s ease;
      }
    `;
  }}
`;

export const AccordianInput = styled.input`
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;

  &:checked + label svg {
    transform: rotate(-90deg);
  }
  &:checked + label + div {
    max-height: 420px;
  }
`;
