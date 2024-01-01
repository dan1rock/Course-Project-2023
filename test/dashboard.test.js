import Dashboard from "../src/scenes/dashboard/context/dashboard";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('Dashboard renders correctly', () => {
    render(
        <Dashboard/>
    );

    expect(document.getElementById("dashboard")).toBeInTheDocument();
});
