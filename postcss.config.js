const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./pages/*.js",
      "./pages/**/*.js",
      "./components/*.js",
      "./components/**/*.js",
      "./pages/*.jsx",
      "./pages/**/*.jsx",
      "./components/*.jsx",
      "./components/**/*.jsx",
    ],
    whitelistPatterns: [/^slick-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: ["postcss-import", "tailwindcss", "autoprefixer", ...(process.env.NODE_ENV === "production" ? [purgecss] : [])],
};
