import StatItem from "../src/components/statItem";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <StatItem
            name="statName"
            value="12345"
            icon="iconName"
        />
    )
});

test('StatItem renders correctly', () => {
    expect(document.getElementById("statItem")).toBeInTheDocument();
});

test('StatItem correctly renders icon', () => {
    const iconElement = document.getElementsByClassName('material-icons-outlined')[0];

    expect(iconElement).toBeInTheDocument();
    expect(iconElement.innerHTML).toContain("iconName");
});

test('StatItem correctly renders stats', () => {
    const itemContainer = document.getElementsByClassName('item-container')[0];

    expect(itemContainer).toBeInTheDocument();
    expect(itemContainer.innerHTML).toContain('statName');
    expect(itemContainer.innerHTML).toContain('12345');
});
