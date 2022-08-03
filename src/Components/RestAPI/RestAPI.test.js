import React from 'react'
import { shallow } from 'enzyme'
import RestAPI from './RestAPI'
import mockAxios from 'axios'

jest.mock('axios')

describe('RestAPI Component', () => {
 
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<RestAPI />)
    })

    test('render without errors', () => {
        expect(wrapper.exists()).toBe(true)
    })
    
    test('should call a fetchData function', () => {
        const getSpy = jest.spyOn(mockAxios, 'get')
        expect(getSpy).toBeCalled()
    })
    
    test('fetched successfully datat from an api', () => {
        const response = [{data: [{'name': 'Alex', 'email': 'alex@gmail.com', 'phone': '54614612152'}]}]
        mockAxios.get.mockResolvedValue(response)
    })
  
    test('fetches data with error', () => {
        const response = [{error: 'API Error'}]
        mockAxios.get.mockRejectedValue(response)
    })

})
 
