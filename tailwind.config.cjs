/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                text: { light: "#11130c", dark: "#ebede3" },
                background: { light: "#ebede3", dark: "#11130c" },
                primary: { light: "#749a65", dark: "#749a65" },
                secondary: { light: "#c9dfcf", dark: "#060a07" },
                accent: { light: "#578560", dark: "#acc9b2" },
            },
        },
    },
    plugins: [],
};
