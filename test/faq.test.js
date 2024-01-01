import FAQ from "../src/scenes/dashboard/context/faq";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <FAQ/>
    );
});

test('FAQ renders correctly', () => {
    expect(document.getElementById("faq")).toBeInTheDocument();
});

test('FAQ renders title', () => {
    const titleElement = document.getElementsByClassName("main-title")[0];
    expect(titleElement.innerHTML).toContain("FAQ");
});

test('FAQ uses accordions', () => {
    expect(document.getElementsByClassName("MuiAccordion-root")[0]).toBeInTheDocument();
});
