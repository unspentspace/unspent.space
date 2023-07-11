const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Ubuntu",
        "Cantarell",
        "Helvetica\\ Neue",
        "sans-serif",
      ],
      mono: ["Ubuntu", "IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        richblack: '#131B23',
        dimgrey: '#736B60',
        yellow: '#FBB000',
        sunglow: '#FFC847',
        lightgrey: '#E2DFDC',
        whitegrey: '#f3f4f6',
        grey: '#938B7E',
        darkgrey: '#49443D'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
