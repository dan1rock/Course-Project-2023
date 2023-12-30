import { render, screen } from '@testing-library/react';
import Reporting from "./scenes/dashboard/context/reporting";
import '@testing-library/jest-dom/extend-expect';

test('test', () => {
  render(<Reporting />);
  const linkElement = screen.getByText(/REPORTING/i);
  expect(linkElement).toBeInTheDocument();
});
