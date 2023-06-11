import { render, screen } from '@testing-library/react';
import App from './App'
import Header from './components/Header/Header'
import Props from './components/Props/Props'
import Events from './components/Events/Events'
import Snapshot from './components/Snapshot/Snapshot'
import RestAPI from './components/RestAPI/RestAPI'

jest.mock('./components/Header/Header');
jest.mock('./components/Props/Props');
jest.mock('./components/Events/Events');
jest.mock('./components/Snapshot/Snapshot');
jest.mock('./components/RestAPI/RestAPI');

describe('APP Component', () => {

  test('Header Component mock as called', () => {
    render(<App />);
    expect(Header).toHaveBeenCalled();
  });

  test('Props Component mock as called', () => {
    render(<App />);
    expect(Props).toHaveBeenCalled();
  });

  test('Events Component mock as called', () => {
    render(<App />);
    expect(Events).toHaveBeenCalled();
  });

  test('Snapshot Component mock as called', () => {
    render(<App />);
    expect(Snapshot).toHaveBeenCalled();
  });

  test('RestAPI Component mock as called', () => {
    render(<App />);
    expect(RestAPI).toHaveBeenCalled();
  });

});
