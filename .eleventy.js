import fs from "node:fs";

export default function (eleventyConfig) {
    eleventyConfig.addFilter("embed64", function (value) {
        return fs.readFileSync(value, "base64");
    });

    fs.rmSync("generated/", { recursive: true, force: true });

    return { passthroughFileCopy: true, htmlTemplateEngine: "njk", dir: { includes: ".", data: "error-data", output: "generated" } };
}
