import styled, { css } from "styled-components";

export const AccordionWrapper = styled.div``;

export const AccordionContent = styled.div``;

export const AccordionItem = styled.div`
  position: relative;
  display: inline-flex;
  background-color: transparent;
  box-sizing: border-box;
  padding-inline: 8px;
`;

export const AccordionLabel = styled.label`
  ${({ theme }) => {
    return css`
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      padding-block: 16px;
      min-width: 24vw;
      max-width: 100%;
      cursor: pointer;

      div {
        display: inline-flex;
        flex-direction: column;

        span:nth-child(1) {
          color: ${theme.colors.layout.foreground};
        }
        span:nth-child(2) {
          color: ${theme.colors.layout["foreground-500"]};
        }
      }

      svg {
        padding-left: 12px;
        fill-color: ${theme.colors.base["default-400"]};
        transition: transform 0.2s ease;
      }

      @media screen and (max-width: ${theme.breakpoints.xxl.width}px) {
        div {
          span:nth-child(1) {
            font-size: ${theme.text.text_large.fontSize};
            line-height: ${theme.text.text_large.lineHeight};
          }
          span:nth-child(2) {
            font-size: ${theme.text.text_medium.fontSize};
            line-height: ${theme.text.text_medium.lineHeight};
          }
        }

        svg {
          width: 24px;
          height: 24px;
        }
      }
      @media screen and (max-width: ${theme.breakpoints.md.width}px) {
        div {
          span:nth-child(1) {
            font-size: ${theme.text.text_medium.fontSize};
            line-height: ${theme.text.text_medium.lineHeight};
          }
          span:nth-child(2) {
            font-size: ${theme.text.text_small.fontSize};
            line-height: ${theme.text.text_small.lineHeight};
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
      @media screen and (max-width: ${theme.breakpoints.sm.width}px) {
        div {
          span:nth-child(1) {
            font-size: ${theme.text.text_small.fontSize};
            line-height: ${theme.text.text_small.lineHeight};
          }
          span:nth-child(2) {
            font-size: ${theme.text.text_tiny.fontSize};
            line-height: ${theme.text.text_tiny.lineHeight};
          }
        }

        svg {
          width: 16px;
          height: 16px;
        }
      }
      @media screen and (max-width: ${theme.breakpoints.xs.width}px) {
        div {
          span:nth-child(1) {
            font-size: ${theme.text.text_tiny.fontSize};
            line-height: ${theme.text.text_tiny.lineHeight};
          }
          span:nth-child(2) {
            font-size: ${theme.text.text_tiny.fontSize};
            line-height: ${theme.text.text_tiny.lineHeight};
          }
        }

        svg {
          width: 16px;
          height: 16px;
        }
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
`;
