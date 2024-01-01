import { render } from '@testing-library/react';
import App from "../src/App";
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter, MemoryRouter} from "react-router-dom";

test('App renders correctly', () => {
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );

    expect(document.getElementById("app")).toBeInTheDocument();
});

test('default tab is dashboard', () => {
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );

    expect(document.getElementById("dashboard")).toBeInTheDocument();
});

test('correctly renders /reporting path', () => {
    render(
        <MemoryRouter initialEntries={['/reporting']}>
            <App/>
        </MemoryRouter>
    );

    expect(document.getElementById("reporting")).toBeInTheDocument();
    expect(document.getElementById("dashboard")).toBeNull();
});

test('correctly renders /users path', () => {
    render(
        <MemoryRouter initialEntries={['/users']}>
            <App/>
        </MemoryRouter>
    );

    expect(document.getElementById("users")).toBeInTheDocument();
    expect(document.getElementById("dashboard")).toBeNull();
});

test('correctly renders /admins path', () => {
    render(
        <MemoryRouter initialEntries={['/admins']}>
            <App/>
        </MemoryRouter>
    );

    expect(document.getElementById("admins")).toBeInTheDocument();
    expect(document.getElementById("dashboard")).toBeNull();
});

test('correctly renders /faq path', () => {
    render(
        <MemoryRouter initialEntries={['/faq']}>
            <App/>
        </MemoryRouter>
    );

    expect(document.getElementById("faq")).toBeInTheDocument();
    expect(document.getElementById("dashboard")).toBeNull();
});

test('correctly renders /settings path', () => {
    render(
        <MemoryRouter initialEntries={['/settings']}>
            <App/>
        </MemoryRouter>
    );

    expect(document.getElementById("settings")).toBeInTheDocument();
    expect(document.getElementById("dashboard")).toBeNull();
});

