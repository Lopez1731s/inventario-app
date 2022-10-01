/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {

                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-200": "#F9F9F9",
                    primary: "#2A303C",
                    secondary: "#F9F9F9",
                },
                night: {
                    ...require("daisyui/src/colors/themes")["[data-theme=night]"],
                    "base-200": "#04293A",
                    "base-300": "#094b69",
                    primary: "#3ABFF8",
                    secondary: "#FFFFFF",
                    accent: "#2A303C",
                },
            },
        ],
    },
}
