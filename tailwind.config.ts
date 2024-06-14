import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      placeholderColor: {
        'transparent': 'transparent',
      },
    },
  },
  variants: {
    extend: {
      placeholderOpacity: ['focus'],
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.placeholder-transparent': {
          '::placeholder': {
            opacity: '0',
          },
        },
        '.placeholder-opacity-transition': {
          '::placeholder': {
            transition: 'opacity 0.3s ease',
          },
        },
      }, ['responsive', 'focus']);
    }
  ],
};
export default config;
