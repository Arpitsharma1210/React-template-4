import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './index'; // Import your Container component
import { Provider } from 'react-redux';
import store from '../../../redux/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/', 
  }),
}));

describe('Container component', () => {
  it('renders with default props and correct layout in LTR and RTL', () => {
    render(
        <Provider store={store}>
      <Router>
        <Container />
      </Router>
      </Provider>
    );
  });

});
