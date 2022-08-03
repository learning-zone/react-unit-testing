import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

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
        wrapper = shallow(<Header />)
    })

    test('render without errors', () => {
       let component = wrapper.find(`[data-test='menu-icon']`)
       expect(component.length).toBe(1)
    })

    test('title', () => {
       let title = wrapper.find(`[data-test='menu-title']`).text()
       expect(title).toMatch('Testing React App')
    })

})
