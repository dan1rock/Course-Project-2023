import {createContext, useMemo, useState} from "react";

export const palette = (mode) => ({
    ...(mode === "dark"
        ? {
            itemContainer: "#373b4b",
            itemContainerLighter: "#43485b",
            defaultBackground: "#1b1c25",
            default: "#bbbbbb",
            borderColor: "#15161e",
        }
        : {
            itemContainer: "#f8f8f8",
            itemContainerLighter: "#ffffff",
            defaultBackground: "#e6e8ed",
            default: "#666666",
            borderColor: "#bbbbbb",
        }),
});

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    getMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    return useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
            getMode: () => mode,
        }),
        [mode]
    );
};