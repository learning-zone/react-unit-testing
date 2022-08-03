import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Events from './Events'

/**
 * Snapshot tests are a useful when UI does not change frequently.
 *
 * A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, 
 * then compares it to a reference snapshot file stored alongside the test.
 */
describe('Events Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Events />)
    })

    test('Matches the snapshot', () => {
      const tree = renderer.create(<Events />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('title', () => {
      let title = wrapper.find(`[data-test='counter-title']`).text()
      expect(title).toBe('Event & Snapshot Test')
    })

    test('render the initial value 0', () => {
       let counter = wrapper.find(`[data-test='counter-value']`).text()
       expect(counter).toBe('0')
    })

    test('render the click event of increment button', () => {
       wrapper.find(`[data-test='increment-btn']`).simulate('click') 
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe('1')
    })

    test('render the click event of decrement button', () => {
       wrapper.find(`[data-test='decrement-btn']`).simulate('click')
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe('0')
    })

})


/**
 * toBe():-  It uses === to check strict equality.
 * 
 * toEqual():- It check that two objects have the same value
 */