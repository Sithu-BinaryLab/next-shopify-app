import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

interface Position {
  [key: string]: string;
}

interface Result {
  [key: string]: string;
}

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        "bg-radient": (value: any) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") }
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
);

/**
 * utility class presets
 */
function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  const result: Result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}` as keyof Result] = `${shape} at ${posValue}`;

  return result;
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      fontSize: {
        xs: ["10px", "18px"],
        sm: ["12px", "20px"],
        md: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "26px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "40px"],
        "3xl": ["36px", "44px"],
        "4xl": ["40px", "48px"],
        "5xl": ["48px", "56px"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "background-grey": "hsl(var(--background-grey))",
        "linear-bg-gradient": "hsl(var(--bg-linear-gradient))",
        "light-dark-green": "hsl(var(--light-darkgreen))",
        "gradient-yellow": "hsl(var(--gradient-yellow))",
        "gradient-blue": "hsl(var(--gradient-blue))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          foreground: "hsl(var(--grey-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          medium: "hsl(var(--gray-medium))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        carousel: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), radialGradientPlugin],
} satisfies Config;

export default config;
