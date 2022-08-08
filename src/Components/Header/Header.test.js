import React from 'react';
import { mount } from 'enzyme';
import { render, fireEvent, screen } from "@testing-library/react";
import Header from './Header';

/**
 * shallow():- method is used to render the single component that we are testing. 
 * It does not render child components.
 */

/**
 * mount():- method renders the full DOM including the child components of the parent 
 * component that we are running the tests.
 */

/**
 * render():- method has the ability to render to static HTML.
 * It renders the children.
 * But this does not have access to React lifecycle methods.
 */
describe('Header Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = render(<Header />);
    })

    test('should check the menu icon', () => {
       const component = screen.getByTestId("menu-icon");
       expect(component);
    })

    test('should check the header component title', () => {
        const title = screen.getByTestId("menu-title").text;
       expect(title).toMatch('React Unit Testing with Jest and Enzyme')
    })

})
