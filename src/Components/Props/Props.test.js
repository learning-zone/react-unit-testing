import React from 'react'
import { shallow } from 'enzyme'
import Props from './Props'

/**
 * propTypes() is used runtime type checking for React props and similar objects.
 * 
 */
describe('Props Component', () => {
 
    let wrapper
    beforeEach(() => {
        const props = {
           header: 'Test Header',
           desc: 'Test Desc'
        }
        wrapper = shallow(<Props {...props} />)
    })

    test('Should render without errors', () => {
       let component = wrapper.find(`[data-test='PropsComponent']`)
       expect(component.length).toBe(1)
    })

    test('Should have title', () => {
        let title = wrapper.find(`[data-test='header']`)
        expect(title.length).toBe(1)
    })

    test('Should have description',  ()=> {
        let desc = wrapper.find(`[data-test='desc']`)
        expect(desc.length).toBe(1)
    })

})
 