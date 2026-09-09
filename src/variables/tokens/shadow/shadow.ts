type ShadowThemeName =
    | "light"
    | "blue"
    | "purple"
    | "green"
    | "orange"
    | "red";

type ShadowLayer = {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: Record<ShadowThemeName, string>;
};

type ShadowToken = {
  layers: ShadowLayer[];
};

export const shadow: Record<string, ShadowToken> = {
  shadowSm: {
    layers: [
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: 0,
        color: {
          light: "rgba(0, 0, 0, 0.05)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
    ],
  },

  shadow: {
    layers: [
      {
        x: 0,
        y: 1,
        blur: 3,
        spread: 0,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
      {
        x: 0,
        y: 1,
        blur: 2,
        spread: -1,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
    ],
  },

  shadowMd: {
    layers: [
      {
        x: 0,
        y: 4,
        blur: 6,
        spread: -1,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
      {
        // NOTE: original tokens had light using spread -2, colored themes using spread -1
        x: 0,
        y: 2,
        blur: 4,
        spread: -2,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "rgba(0, 0, 0, 0.06)",
          purple: "rgba(0, 0, 0, 0.06)",
          green: "rgba(0, 0, 0, 0.06)",
          orange: "rgba(0, 0, 0, 0.06)",
          red: "rgba(0, 0, 0, 0.06)",
        },
      },
    ],
  },

  shadowLg: {
    layers: [
      {
        x: 0,
        y: 10,
        blur: 15,
        spread: -3,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
      {
        // NOTE: original tokens had light using spread -4, colored themes using spread -2
        x: 0,
        y: 4,
        blur: 6,
        spread: -4,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "rgba(0, 0, 0, 0.05)",
          purple: "rgba(0, 0, 0, 0.05)",
          green: "rgba(0, 0, 0, 0.05)",
          orange: "rgba(0, 0, 0, 0.05)",
          red: "rgba(0, 0, 0, 0.05)",
        },
      },
    ],
  },

  shadowXl: {
    layers: [
      {
        x: 0,
        y: 20,
        blur: 25,
        spread: -5,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F333",
          purple: "#7828C833",
          green: "#17C96433",
          orange: "#F5A52433",
          red: "#F3126033",
        },
      },
      {
        // NOTE: original tokens had light using y:8/blur:10/spread:-6, colored themes using y:10/blur:10/spread:-5
        x: 0,
        y: 8,
        blur: 10,
        spread: -6,
        color: {
          light: "rgba(0, 0, 0, 0.1)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
    ],
  },

  shadow2Xl: {
    layers: [
      {
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
        color: {
          light: "rgba(0, 0, 0, 0.25)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
    ],
  },

  shadowInner: {
    layers: [
      {
        x: 0,
        y: 2,
        blur: 4,
        spread: 0,
        color: {
          light: "rgba(0, 0, 0, 0.05)",
          blue: "#0070F366",
          purple: "#7828C866",
          green: "#17C96466",
          orange: "#F5A52466",
          red: "#F3126066",
        },
      },
    ],
  },
};