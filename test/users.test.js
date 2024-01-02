import Users from "../src/scenes/dashboard/context/users";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <Users/>
    );
});

test('Users renders correctly', () => {
    expect(document.getElementById("users")).toBeInTheDocument();
});

test('Users renders title', () => {
    const titleElement = document.getElementsByClassName("main-title")[0];

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.innerHTML).toContain("USERS");
});

test('Users renders data grid', () => {
    expect(document.getElementsByClassName("MuiDataGrid-root")[0]).toBeInTheDocument();
});

test('data grid contains all necessary columns', () => {
    const headers = document.getElementsByClassName("MuiDataGrid-columnHeaders")[0];

    expect(headers).toBeInTheDocument();
    expect(headers.innerHTML).toContain("ID");
    expect(headers.innerHTML).toContain("Name");
});
