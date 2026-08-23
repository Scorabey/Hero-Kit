import styled, { css } from "styled-components";
import type { AccordianVariant } from "./index.tsx";

export const AccordionWrapper = styled.div<{ $variant: AccordianVariant }>`
  ${({ theme }) => {
      return css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${theme.colors.layout.divider};
      `;
    }}

  ${({ theme, $variant }) => {
      switch ($variant) {
        case "splitted":
          return css`
            background-color: transparent;
          `;
        default:
          return css`
            background-color: ${theme.colors.layout.divider};
          `;
      }
    }}
`;

export const AccordionInlineHr = styled.div<{ $variant: AccordianVariant }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;

  ${({ theme, $variant }) => {
      switch ($variant) {
        case "splitted":
          return css`
            gap: 8px;
          `;
        default:
          return css`
            background-color: ${theme.colors.layout.divider};
          `;
      }
    }}
`;

export const AccordionPadding = styled.div<{ $variant: AccordianVariant }>`
  ${({ theme }) => {
      return css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding-inline: 16px;
        border-radius: ${theme.layout.radius.rounded_medium}px;
      `;
    }}

  ${({ $variant, theme }) => {
      switch ($variant) {
        case "shadow":
          return css`
            background-color: ${theme.colors.content.content1};
          `;
        case "bordered":
          return css`
            border: 2px solid ${theme.colors.layout.divider};
          `;
        case "splitted":
          return css`
            padding-inline: 8px;
          `;
        default:
          return css``;
      }
    }}
`;
