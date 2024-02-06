import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import Header from './index';
import store from '../../../redux/store';
import { MemoryRouter, Router } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { createMemoryHistory } from 'history';
import { goBack } from 'connected-react-router';
import * as router from 'connected-react-router';
import styled from 'styled-components';
import { StyledGoBackContainer } from './styles';
import ChipButton from '../../chipButton';


describe('Header component', () => {
  it('renders with navigation', () => {
    render(
      <Provider store={store}>
        <Header navigation>
          Header Title
        </Header>
      </Provider>
    );
    expect(screen.getByText('Header Title')).toBeInTheDocument();
  });

  it('renders without navigation', () => {
    render(
      <Provider store={store}> 
        <Header>
          Header Title
        </Header>
      </Provider>
    );
    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.queryByText('< Back')).toBeNull(); 
  });

  it('renders with navigation', () => {
    render(
      <Provider store={store}> 
        <MemoryRouter> 
          <Header navigation={true}>
            Header Title
          </Header>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.getByText('< Back')).toBeInTheDocument(); 
  });


 jest.mock('connected-react-router', () => ({
  ...jest.requireActual('connected-react-router'), // Import actual module for everything except goBack
  goBack: jest.fn() // Mock goBack function
}));

// Mock redux store
const store = createStore(() => ({}));

// Mock goBack action
jest.mock('connected-react-router', () => ({
  goBack: jest.fn()
}));

// Define a styled component for testing
const StyledTestContainer = styled.div``;

it('renders without error', () => {
    const { container } = render(
      <StyledTestContainer>
        <StyledGoBackContainer />
      </StyledTestContainer>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

});

describe('<ChipButton />', () => {
    it('calls onClick handler and has correct color', () => {
      const onClickMock = jest.fn();
  
      const { getByRole } = render(
        <ChipButton onClick={onClickMock} color="green">
          Click Me
        </ChipButton>
      );
  
      fireEvent.click(getByRole('button'));
  
      expect(onClickMock).toHaveBeenCalledTimes(1);
  
      const button = getByRole('button');
      expect(button).toHaveStyle('background-color: rgb(166, 231, 216)');
    });
  });