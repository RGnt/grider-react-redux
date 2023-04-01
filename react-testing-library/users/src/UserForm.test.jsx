import {render, screen} from "@testing-library/react";
import UserForm from "./UserForm.jsx";

describe('UserForm', () => {
    it('shows two inputs and a button', () => {
        // Render the component
        render(<UserForm onUserAdd={() => {}}/>)

        // Manipulate the component or find tan element in it
        const inputs = screen.getAllByRole('textbox')
        const button = screen.getByRole('button')
        // Assertions - Make sure the component is doing what we expect it to do
        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument();
    })
})