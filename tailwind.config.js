const { colors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["'Open Sans', sans-serif"],
            },
            colors: {
                blue: { ...colors.blue, 200: "#BCE7F0" },
                pink: { ...colors.pink, 400: "#F9CADA" },
            },
            opacity: {
                35: "0.35",
            },
            spacing: {
                88: "22rem",
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
