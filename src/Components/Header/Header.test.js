import React from 'react';
import { cleanup, render, screen } from "@testing-library/react";
import Header from './Header';
afterEach(cleanup);

describe('Header Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = render(<Header/>)
    })
    
    test('should check the menu icon', () => {
       expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    })

    test('should check the header component title', () => {
       expect(screen.getByText('React Unit Testing with Jest and Enzyme')).toBeInTheDocument();
    })

})
