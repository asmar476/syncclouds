/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#434343",
        primary: "#002680",
        blueLight: " #001647",
        blueDark: " #2261A2",
        purpleLight: "#273C7F",
        purpleDark: "#001647",

        gradientBlueDark: "#012781",
        gradientBlueLight: "#104B96",

        borderColor: "#AFAFAF",
        grayLight: "#F3F4FF  ",
        grayDark: "#161822",

        gradientGrayLight: "#E6E8EE",
        gradientGrayDark: "#E1E1E1",
      },
      lineHeight: {
        lineHeightParag: "2rem",
      },
      container: {
        margin: "0 auto",
      },
    },
  },
  plugins: [],
};
