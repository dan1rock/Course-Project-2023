import Reporting from "../src/scenes/dashboard/context/reporting";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('Reporting renders correctly', () => {
    render(
        <Reporting/>
    );

    expect(document.getElementById("reporting")).toBeInTheDocument();
});
