import {useMode, palette} from "../src/theme";

jest.mock('../src/theme', () => {
    const originalModule = jest.requireActual('../src/theme');
    return {
        ...originalModule,
        useMode: jest.fn(() => {
            let mode = "dark"

            return {
            getMode: jest.fn(() => mode),
            toggleColorMode: jest.fn(() => mode = mode === "light" ? "dark" : "light"),
    }}),
}});

test('initial theme state is dark', () => {
    const mode = useMode();

    expect(mode.getMode()).toBe("dark");
});

test('theme toggling works properly', () => {
    const mode = useMode();

    expect(mode.getMode()).toBe("dark");
    mode.toggleColorMode();
    expect(mode.getMode()).toBe("light");
    mode.toggleColorMode();
    expect(mode.getMode()).toBe("dark");
});

test('palette returns according to theme', () => {
    const mode = useMode();

    expect(palette(mode.getMode()).testColor).toBe("#000");
    mode.toggleColorMode();
    expect(palette(mode.getMode()).testColor).toBe("#fff");
});