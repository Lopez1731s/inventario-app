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
                    primary: "#F9F9F9",
                    secondary: "#2c2f33",
                },
            },
        ],
    },
}
