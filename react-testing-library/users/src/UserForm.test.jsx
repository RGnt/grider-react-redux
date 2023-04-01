import {render, screen} from "@testing-library/react";
import UserForm from "./UserForm.jsx";

describe('UserForm', () => {
    it('renders', () => {
        render(<UserForm onUserAdd={() => {}/>)
    })
})