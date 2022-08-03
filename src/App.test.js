import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


describe('APP Component', () => {

  test('Should render the app without error', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })

})
