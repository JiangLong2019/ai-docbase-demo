/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    "stories": [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-docs",
        "@storybook/addon-interactions"
    ],
    "framework": {
        "name": "@storybook/html-vite",
        "options": {}
    }
};
export default config;