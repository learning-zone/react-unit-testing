const axios = {
  get: jest.fn(() =>  {
    return Promise.resolve({ 
      data: [{'name': 'Alex', 'email': 'alex@melissa.com', 'phone': '4612145112'}] 
    })
  })
}
export default axios
