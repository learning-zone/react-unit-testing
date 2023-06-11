// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme'
import 'jest-enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from '@mnajdova/enzyme-adapter-react-18'
import { createSerializer } from 'enzyme-to-json'


/**
 * Set the default serializer for jest to be the from enzyme-to-json
 * This produces an easier to read serialized format.
 */
 expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

 // React 16 Enzyme adaptor
 Enzyme.configure({ adapter: new Adapter() });
