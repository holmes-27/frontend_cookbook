import {render,screen} from '@testing-library/react';
import Login from '../Login';
import { describe, it } from 'vitest';

describe("Login",()=>{
    it("checking component loaded",()=>{
        render(<Login />)
        expect(screen.queryByText(/Login/)).toBeInTheDocument()
    })
    
    it("checking input fields are empty",()=>{
        render(<Login />)
        expect(screen.queryByPlaceholderText("Enter your email")).toHaveValue("")
        expect(screen.queryByPlaceholderText("Enter your password")).toHaveValue("")
    })
})

