import fs from "node:fs";

export default function (eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("embed64", function (value) {
        return fs.readFileSync(value, "base64");
    });

    fs.rmSync("_site/", { recursive: true, force: true });

    return { passthroughFileCopy: false, htmlTemplateEngine: "njk", dir: { includes: ".", data: "./_data", output: "./_site" } };
}
