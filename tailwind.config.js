const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                platinum: {
                    100: "#eef6f6",
                    200: "#cee7e8",
                    300: "#add6d8",
                    400: "#87c6c9",
                    500: "#64b5b9",
                    600: "#3f888d",
                },
                gold: {
                    100: "#faf3d6",
                    200: "#cee7e8",
                    300: "#e5c230",
                    400: "#cea32c",
                    500: "#a07e22",
                    600: "#765d19",
                },
                silver: {
                    100: "#f3f5f7",
                    200: "#e7ebee",
                    300: "#cdd6dc",
                    400: "#9fafbc",
                    500: "#8196a7",
                    600: "#647d90",
                },
                bronze: {
                    100: "#f8e9de",
                    200: "#f4decd",
                    300: "#e2a87b",
                    400: "#db935c",
                    500: "#c27438",
                    600: "#aa6631",
                },
                "neutrals-dark": {
                    100: "#7b8794",
                    200: "#616e7c",
                    300: "#52606d",
                    400: "#3e4c59",
                    500: "#323f4b",
                    600: "#1f2933",
                },
                "neutrals-light": {
                    100: "#f9fafb",
                    200: "#f3f5f7",
                    300: "#e7ebee",
                    400: "#cdd6dc",
                    500: "#cbd2d9",
                    600: "#9aa5b1",
                },
                eqos: {
                    400: "#367dbf",
                    500: "#1464ad",
                    600: "#095292",
                },
                white: "#fff",
            },
            fontSize: {
                "2xs": ".625rem",
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
};
