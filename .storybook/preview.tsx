import type { Preview } from "@storybook/react";
import React from "react";
import { LibraryThemeProvider, getTheme, ThemeMode } from "../src";

export const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.theme ?? "light") as ThemeMode;
      const theme = getTheme(mode);

      return (
        <LibraryThemeProvider theme={theme}>
          <div
            style={{
              padding: "1rem",
              minHeight: "100vh",
              background: mode === "dark" ? "#121212" : "#ffffff",
            }}
          >
            <Story />
          </div>
        </LibraryThemeProvider>
      );
    },
  ],
};

export default preview;
