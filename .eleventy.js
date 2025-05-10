import fs from "node:fs";

export default function (eleventyConfig) {
    eleventyConfig.addFilter("embed64", function (value) {
        return fs.readFileSync(value, "base64");
    });

    fs.rmSync("error-pages/", { recursive: true, force: true });

    return { passthroughFileCopy: true, htmlTemplateEngine: "njk", dir: { includes: ".", data: "error-data", output: "error-pages" } };
}
