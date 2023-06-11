import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Props from './Props';
afterEach(cleanup);

/**
 * propTypes() is used runtime type checking for React props and similar objects.
 * 
 */
describe('Props Component', () => {

    test('Should have a title', () => {
        render(<props header="Props Title" description="Props Description" />);
        expect(screen.getByText(/Props Title/i)).toBeInTheDocument();
    })

    test('Should have a description', () => {
        render(<props header="Props Title" description="Props Description" />);
        expect(screen.getByText(/Props Description/i)).toBeInTheDocument();
    })

    test('Description Initial Color', () => {
        render(<props />);
        expect(screen.getByTLabelText("description")).toHaveStyle({ color: "red" });
    })

    test('Checkbox Initial Condition', () => {
        render(<props />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    })

    test('Description color after checkbox checked', () => {
        render(<props />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(screen.getByLabelText("description")).toHaveStyle({ color: "green" });
    })
})
