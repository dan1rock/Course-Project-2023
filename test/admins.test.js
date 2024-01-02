import Admins from "../src/scenes/dashboard/context/admins";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <Admins/>
    );
});

test('Admins renders correctly', () => {
    expect(document.getElementById("admins")).toBeInTheDocument();
});

test('Admins renders title', () => {
    const titleElement = document.getElementsByClassName("main-title")[0];

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.innerHTML).toContain("ADMINS");
});
