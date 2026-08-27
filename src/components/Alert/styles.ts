import styled, { css, keyframes } from "styled-components";
import type { AlertColor, AlertRadiusSize } from "./index.tsx";
import type { ThemeType } from "../../variables/theme.ts";

const appearance = keyframes`
    from {
      opacity: 0;
      transform: translateY(-120px);
    } 
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const ColorVariants = {
  default: (theme: ThemeType) => css`
    background-color: ${theme.colors.base.default};
    button {
      svg {
        fill: ${theme.colors.base["default-400"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base["default-600"]};
      }
    }
    .content {
      .title {
        color: ${theme.colors.layout.foreground};
      }
      .message {
        color: ${theme.colors.base["default-600"]};
      }
    }
  `,
  primary: (theme: ThemeType) => css`
    background-color: ${theme.colors.base["primary-50"]};
    button {
      svg {
        fill: ${theme.colors.base["primary-200"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base.primary};
      }
    }
    .content {
      .title {
        color: ${theme.colors.base.primary};
      }
      .message {
        color: ${theme.colors.base.primary};
      }
    }
  `,
  secondary: (theme: ThemeType) => css`
    background-color: ${theme.colors.base["secondary-50"]};
    button {
      svg {
        fill: ${theme.colors.base["secondary-200"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base.secondary};
      }
    }
    .content {
      .title {
        color: ${theme.colors.base.secondary};
      }
      .message {
        color: ${theme.colors.base.secondary};
      }
    }
  `,
  success: (theme: ThemeType) => css`
    background-color: ${theme.colors.base["success-50"]};
    button {
      svg {
        fill: ${theme.colors.base["success-200"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base.success};
      }
    }
    .content {
      .title {
        color: ${theme.colors.base.success};
      }
      .message {
        color: ${theme.colors.base.success};
      }
    }
  `,
  warning: (theme: ThemeType) => css`
    background-color: ${theme.colors.base["warning-50"]};
    button {
      svg {
        fill: ${theme.colors.base["warning-200"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base.warning};
      }
    }
    .content {
      .title {
        color: ${theme.colors.base["warning-foreground"]};
      }
      .message {
        color: ${theme.colors.base["warning-foreground"]};
      }
    }
  `,
  danger: (theme: ThemeType) => css`
    background-color: ${theme.colors.base["danger-50"]};
    button {
      svg {
        fill: ${theme.colors.base["danger-200"]};
      }
    }
    .icon-wrapper {
      svg {
        fill: ${theme.colors.base.danger};
      }
    }
    .content {
      .title {
        color: ${theme.colors.base["danger-foreground"]};
      }
      .message {
        color: ${theme.colors.base["danger-foreground"]};
      }
    }
  `,
};

const RadiusVariants = {
  none: () => css`
    border-radius: 0;
  `,
  sm: (theme: ThemeType) => css`
    border-radius: ${theme.layout.radius.rounded_medium}px;
  `,
  md: () => css`
    border-radius: 16px;
  `,
  lg: () => css`
    border-radius: 22px;
  `,
  full: () => css`
    border-radius: 9999px;
  `,
};

export const AlertWrapper = styled.div<{
  $color: AlertColor;
  $radiusSize: AlertRadiusSize;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: clamp(200px, 35vw, 342px);
  width: 100%;
  height: auto;
  min-height: fit-content;
  max-height: 96px;
  padding: 12px;
  gap: 16px;
  overflow-y: auto;
  animation: ${appearance} 0.3s ease-in-out;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 0;

    svg {
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
  ${({ theme, $color }) => ColorVariants[$color](theme)} // Color style search

  ${({ theme, $radiusSize }) => RadiusVariants[$radiusSize](theme)}
`;

export const AlertContent = styled.div<{ $color: AlertColor }>`
  display: inline-flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  .content {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 0;
    width: 100%;

    .title {
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 24px;
      font-size: ${({ theme }) => theme.text.text_medium.fontSize};
      line-height: ${({ theme }) => theme.text.text_medium.lineHeight};
    }
    .message {
      display: block;
      width: 100%;
      flex-wrap: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: ${({ theme }) => theme.text.text_small.fontSize};
      line-height: ${({ theme }) => theme.text.text_small.lineHeight};
    }
  }
`;
