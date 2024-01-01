import Reporting from "../src/scenes/dashboard/context/reporting";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <Reporting/>
    );
});

test('Reporting renders correctly', () => {
    expect(document.getElementById("reporting")).toBeInTheDocument();
});

test('Reporting renders title', () => {
    const titleElement = document.getElementsByClassName("main-title")[0];
    expect(titleElement.innerHTML).toContain("REPORTING");
});

test('Reporting renders charts', () => {
    const items = document.getElementsByClassName("item-container");
    for (const item of items) {
        expect(item).toBeInTheDocument();
    }
});
