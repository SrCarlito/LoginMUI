import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main:"#fff"
        },
        divider:"#fff"
    },
    
})
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme} >

            <CssBaseline />
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </React.StrictMode>
);