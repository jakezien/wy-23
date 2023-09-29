import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      franklin: ["Franklin Gothic Compressed", "sans-serif"],
      display: ["Garamond Pro Display", "serif"],
    },
    extend: {
      colors: {
        hotPink: "#F22E60",
        crimson: "#D83027",
        brown: "#533B3A",
        earth: "#241C1C",
        clay: "#C0817A",
        cloud: "rgba(250,250,255,0.985)",
        white: "rgb(250,250,255)"
      }
    },
  },
  plugins: [],
}
export default config
