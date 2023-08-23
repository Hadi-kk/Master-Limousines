import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const MontserratRegular = localFont({
    src: "../assets/fonts/Montserrat-Regular.ttf",
});
const MontserratSemiBold = localFont({
    src: "../assets/fonts/Montserrat-SemiBold.ttf",
});
const LeagueSpartan = localFont({
    src: "../assets/fonts/LeagueSpartan-Bold.ttf",
});
const Archivo = localFont({
    src: "../assets/fonts/Archivo-Regular.ttf",
});
const LibreBaskerville = localFont({
    src: "../assets/fonts/LibreBaskerville-Italic.ttf",
});

const themeOptions = {
    palette: {
        // mode: 'light',
        primary: {
            main: "#A72211",
        },
        secondary: {
            main: "#2189B7",
        },
        error: {
            main: "#FAC30F",
        },
        info: {
            main: "#383B42",
        },
        // divider: "#343232",
        // text: {
        //     primary: "#FFFFFF",
        //     disabled: "rgba(107,107,107,0.38)",
        //     secondary: "#343232",
        // },
    },
    shape: {
        borderRadius: 0,
    },
    typography: {
        color: "#ffffff",
        h4: {
            fontFamily: MontserratRegular.style.fontFamily,
        },
        h5: {
            fontFamily: MontserratSemiBold.style.fontFamily,
        },
        h3: {
            fontFamily: LibreBaskerville.style.fontFamily,
        },
        h1: {
            fontFamily: LeagueSpartan.style.fontFamily,
        },
        body1: {
            fontFamily: Archivo.style.fontFamily,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    fontFamily: MontserratRegular.style.fontFamily,
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "0.2em",
                },
            },
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
