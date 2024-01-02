import Dashboard from "../src/scenes/dashboard/context/dashboard";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <Dashboard/>
    );
});

test('Dashboard renders correctly', () => {
    expect(document.getElementById("dashboard")).toBeInTheDocument();
});

test('Dashboard renders title', () => {
    const titleElement = document.getElementsByClassName("main-title")[0];

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.innerHTML).toContain("DASHBOARD");
});

test('Dashboard renders charts', () => {
    const items = document.getElementsByClassName("item-container");
    for (const item of items) {
        expect(item).toBeInTheDocument();
    }
});
