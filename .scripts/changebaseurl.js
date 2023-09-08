const replace = require("replace-in-file");

const BASEURL = "/webtrisukses";

const options = {
  // Specify the file patterns you want to target
  files: [
    "../**/*.js", // JavaScript files
    "../**/*.jsx", // JSX files
    "../**/*.json", // JSON files
    "../**/*.html", // HTML files
    "../**/*.css", // CSS files
  ],
  from: /\"\/assets\//g, // The string you want to replace
  to: `"${BASEURL}/assets/`, // The replacement string
};

try {
  replace.sync(options);
} catch (error) {
  console.error("Error occurred:", error);
}
