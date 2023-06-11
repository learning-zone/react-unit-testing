import { cleanup, render } from "@testing-library/react";
import RestAPI from './RestAPI'
import mockAxios from 'axios'
afterEach(cleanup);

jest.mock('axios');

/**
 * __mocks__ : mock data directory
 */

describe('RestAPI Component', () => {

    test('Should call fetchAllUsers function', () => {
        render(<RestAPI />);
        const getSpy = jest.spyOn(mockAxios, 'get')
        expect(getSpy).toBeCalled()
    })

    test('fetch successfully data from an api', () => {
        render(<RestAPI />);
        const response = [{ data: [{ id: 100, name: 'Leanne Graham', email: 'leanne@gmail.com', phone: 54614612152 }] }]

        mockAxios.get.mockResolvedValue(response)
    })

    test('fetch data with an error', () => {
        render(<RestAPI />);
        const response = [{ error: 'API Error' }]
        mockAxios.get.mockRejectedValue(response)
    });
});
