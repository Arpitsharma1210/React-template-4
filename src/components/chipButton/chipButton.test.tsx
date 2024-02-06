import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ChipButton from './index';
import { brand, colors } from '../../theme/style.palette';

type ButtonEnum = {
    [key: string]: {
      color: string;
      bgColor: string;
      borderColor: string;
    };
  };


const Buttons: ButtonEnum = {
    yellow: {
      color: colors.yellow10,
      bgColor: brand.primaryMain,
      borderColor: brand.secondaryMain,
    },
    yellow2: {
      color: colors.yellow10,
      bgColor: colors.yellow50,
      borderColor: colors.yellow10,
    },
    green: {
      color: colors.green5,
      bgColor: colors.green25,
      borderColor: colors.green5,
    },
    blue: {
      color: colors.blue10,
      bgColor: colors.blue25,
      borderColor: colors.blue10,
    },
    red: {
      color: colors.red10,
      bgColor: colors.red50,
      borderColor: colors.red10,
    },
    orange: {
      color: colors.orange10,
      bgColor: colors.orange25,
      borderColor: colors.orange10,
    },
    white: {
      color: colors.grey100,
      bgColor: colors.white25,
      borderColor: colors.grey100,
    },
    purple: {
      color: colors.purple10,
      bgColor: colors.purple25,
      borderColor: colors.purple10,
    },
    grey:{
      color: colors.blackExtra,
      bgColor: colors.grey10,
      borderColor: colors.grey100,
    }
  };



describe('ChipButton Component', () => {
    it('renders button with specified color and default size', () => {
        render(<ChipButton color="yellow">Button Text</ChipButton>);
        const button = screen.getByText('Button Text');
        const expectedStyle = {
          backgroundColor: Buttons['yellow'].bgColor,
          borderColor: Buttons['yellow'].borderColor,
          color: Buttons['yellow'].color,
          fontSize: '14px', 
        };
        expect(button).toHaveStyle(expectedStyle);
      });

      it('executes onClick function when button is clicked', () => {
        const onClickMock = jest.fn();
        render(<ChipButton color="yellow" onClick={onClickMock}>Button Text</ChipButton>);
        const button = screen.getByText('Button Text');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });

      it('renders button with specified size', () => {
        render(<ChipButton color="yellow" size="sm">Button Text</ChipButton>);
        const button = screen.getByText('Button Text');
        const expectedStyle = {
          fontSize: '12px', 
        };
        expect(button).toHaveStyle(expectedStyle);
      });

      it('does not execute onClick function when onClick prop is not provided', () => {
        const onClickMock = jest.fn();
        render(<ChipButton color="yellow">Button Text</ChipButton>);
        const button = screen.getByText('Button Text');
        fireEvent.click(button);
        expect(onClickMock).not.toHaveBeenCalled();
      });
});
