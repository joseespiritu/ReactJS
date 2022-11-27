import Accordion from './Accordion';
import { render, screen, queryByText, fireEvent } from "@testing-library/react";

describe('Accordion', () => {

    beforeEach(() => {
        render(
            <Accordion title='hola'>
                <h3>My content</h3>
                <p>Some</p>
            </Accordion>
        );
    });

    test('should show title all the time', () => {
        expect(screen.getByText("hola")).toBeDefined();
    });

    test('should not show the content at the start', () => {
        expect(screen.queryByText(/content/i)).toBeNull();
    });

    test('should not show the content when title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeDefined();
    });

    test('should hide the content when title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeNull();
    });
});