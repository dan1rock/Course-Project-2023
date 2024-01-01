import Admins from "../src/scenes/dashboard/context/admins";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('Admins renders correctly', () => {
    render(
        <Admins/>
    );

    expect(document.getElementById("admins")).toBeInTheDocument();
});
