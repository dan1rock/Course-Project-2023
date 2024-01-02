import StatItem from "../src/components/statItem";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <StatItem/>
    )
});

test('StatItem renders correctly', () => {
    expect(document.getElementById("statItem")).toBeInTheDocument();
});

test('StatItem renders icon', () => {
    expect(document.getElementsByClassName('material-icons-outlined')[0]).toBeInTheDocument();
});