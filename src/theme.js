import {createContext, useMemo, useState} from "react";

export const palette = (mode) => ({
    ...(mode === "dark"
        ? {
            itemContainer: "#000000"
        }
        : {
            itemContainer: "#ffffff"
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