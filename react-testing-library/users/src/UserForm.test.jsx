import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event';
import UserForm from "./UserForm.jsx";

describe('UserForm', () => {
    it('shows two inputs and a button', () => {
        // Render the component
        render(<UserForm onUserAdd={() => {
        }}/>);

        // Manipulate the component or find tan element in it
        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole('button');

        // Assertions - Make sure the component is doing what we expect it to do
        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument();
    })

    it('calls onUserAdd when the form is submitted', async () => {
        // Set up a object to compare against and to make sure we use same data for everything
        // And create a mck function we can use to test onUserAdd
        const userInput = {name: "jane", email: "jane@jane.com"};
        const mock = vi.fn();

        // Try to render my component
        render(<UserForm onUserAdd={mock}/>)


        // Find the two inputs
        const nameInput = screen.getByRole('textbox',
            {
                name: /Name/i
            });
        const emailInput = screen.getByRole('textbox',
            {
                name: /Email/i
            });

        // Simulate typing in a name
        await user.click(nameInput);
        await user.keyboard(userInput.name);

        // Simulate typing in an email
        await user.click(emailInput);
        await user.keyboard(userInput.email);

        // Find the button
        const button = screen.getByRole('button');

        // Simulate clicking the button
        await user.click(button);

        // Assertion to make sure 'onUserAdd' gets called with email/name
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(userInput)
    })
})