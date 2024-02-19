import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Sidebar from './index';
import store from '../../../redux/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

test('renders with correct LTR layout', () => {
  render(
    <Provider store={store}>
      <Router>
        <Sidebar />
      </Router>
    </Provider>
  );
  expect(screen.getByAltText('sidebar logo')).toBeInTheDocument();
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Dashboard').closest('a')).toBeInTheDocument();
});

test('renders with correct RTL layout', () => {
  document.documentElement.dir = 'rtl';
  render(
    <Provider store={store}>
      <Router>
        <Sidebar />
      </Router>
    </Provider>
  );

  expect(screen.getByAltText('sidebar logo')).toBeInTheDocument();
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Dashboard').closest('a')).toBeInTheDocument();
});
