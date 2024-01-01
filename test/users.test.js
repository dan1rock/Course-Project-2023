import Users from "../src/scenes/dashboard/context/users";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('Users renders correctly', () => {
    render(
        <Users/>
    );

    expect(document.getElementById("users")).toBeInTheDocument();
});
