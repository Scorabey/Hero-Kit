import styled, { css, keyframes } from "styled-components";
import type { AlertColor, AlertRadiusSize } from "./index.tsx";

const appearance = keyframes`
    from {
      transform: translateY(-120px);
    } to {
        transform: translateY(0);
      }
`;

export const AlertWrapper = styled.div<{
  $color: AlertColor;
  $radiusSize: AlertRadiusSize;
}>`
  position: fixed;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: clamp(200px, 35vw, 342px);
  width: 100%;
  height: auto;
  min-height: 64px;
  max-height: 96px;
  padding: 12px;
  gap: 16px;
  top: 30px;
  left: 50%;
  translate: -50% 0;
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

  ${({ theme, $color }) => {
    switch ($color) {
      case "primary":
        return css`
          background-color: ${theme.colors.base["primary-50"]};

          button {
            svg {
              fill: ${theme.colors.base["primary-200"]};
            }
          }
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.base["secondary-50"]};

          button {
            svg {
              fill: ${theme.colors.base["secondary-200"]};
            }
          }
        `;
      case "success":
        return css`
          background-color: ${theme.colors.base["success-50"]};

          button {
            svg {
              fill: ${theme.colors.base["success-200"]};
            }
          }
        `;
      case "warning":
        return css`
          background-color: ${theme.colors.base["warning-50"]};

          button {
            svg {
              fill: ${theme.colors.base["warning-200"]};
            }
          }
        `;
      case "danger":
        return css`
          background-color: ${theme.colors.base["danger-50"]};

          button {
            svg {
              fill: ${theme.colors.base["danger-200"]};
            }
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.base.default};

          button {
            svg {
              fill: ${theme.colors.base["default-400"]};
            }
          }
        `;
    }
  }}

  ${({ theme, $radiusSize }) => {
    switch ($radiusSize) {
      case "sm":
        return css`
          border-radius: ${theme.layout.radius.rounded_medium}px;
        `;
      case "md":
        return css`
          border-radius: 16px;
        `;
      case "lg":
        return css`
          border-radius: 22px;
        `;
      case "full":
        return css`
          border-radius: 9999px;
        `;
      default:
        return css`
          border-radius: 0;
        `;
    }
  }}
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
      display: flex;
      flex-wrap: wrap;
      font-size: ${({ theme }) => theme.text.text_small.fontSize};
      line-height: ${({ theme }) => theme.text.text_small.lineHeight};
    }
  }

  ${({ theme, $color }) => {
    switch ($color) {
      case "primary":
        return css`
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
        `;
      case "secondary":
        return css`
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
        `;
      case "success":
        return css`
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
        `;
      case "warning":
        return css`
          .icon-wrapper {
            svg {
              fill: ${theme.colors.base.warning};
            }
          }
          .content {
            .title {
              color: ${theme.colors.base.warning};
            }
            .message {
              color: ${theme.colors.base.warning};
            }
          }
        `;
      case "danger":
        return css`
          .icon-wrapper {
            svg {
              fill: ${theme.colors.base.danger};
            }
          }
          .content {
            .title {
              color: ${theme.colors.base.danger};
            }
            .message {
              color: ${theme.colors.base.danger};
            }
          }
        `;
      default:
        return css`
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
        `;
    }
  }}
`;
