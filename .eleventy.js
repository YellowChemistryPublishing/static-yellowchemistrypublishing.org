import fs from "node:fs";

export default function (eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("embed64", function (value) {
        return fs.readFileSync(value, "base64");
    });
    eleventyConfig.addFilter("obj2JSON", function (value) {
        return JSON.stringify(value);
    });

    fs.rmSync("generated/", { recursive: true, force: true });

    return { passthroughFileCopy: false, htmlTemplateEngine: "njk", dir: { includes: ".", data: "error-data", output: "generated" } };
}
