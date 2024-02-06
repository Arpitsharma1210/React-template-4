import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import JD from './index';

describe('JD component', () => {
    it('renders correctly', () => {
        const heading = 'Software Engineer';
        const date = '15-Sep-2023';
        const modalOpenState = true;
        const modalStateHandler = jest.fn();
    
        render(
          <JD
            heading={heading}
            date={date}
            modalOpenState={modalOpenState}
            modalStateHandler={modalStateHandler}
          />
        );

      });
});