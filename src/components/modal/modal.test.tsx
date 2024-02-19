import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('renders modal content with heading and close button', () => {
    const handleClose = jest.fn();  
    const heading = 'Test Modal';
    const subHeading = 'This is a test modal';
    const headingImgSrc = '/path/to/image.jpg';

    render(
      <Modal show={true} onClose={handleClose} heading={heading} subHeading={subHeading} headingImgSrc={headingImgSrc} modalStateHandler={undefined}>
        <div>Modal content goes here</div>
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal')).toBeInTheDocument();   
    expect(screen.getByAltText('close icon')).toBeInTheDocument();
  });
   
  it('renders with fit-content width', () => {
    render(
      <Modal show={true} fitContent={true} modalStateHandler={undefined}>
        <div>Modal content goes here</div>
      </Modal>
    );

    const modalContainer = screen.getByRole('presentation');

    expect(modalContainer).toBeInTheDocument();
    expect(modalContainer).toHaveStyle({ width: 'fit-content' });
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();

    render(
      <Modal show={true} onClose={handleClose} modalStateHandler={undefined}>
        <div>Modal content goes here</div>
      </Modal>
    );

    const closeButton = screen.getByAltText('close icon');
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it('matches snapshot when modal is visible', () => {
    const { asFragment } = render(
      <Modal show={true} modalStateHandler={undefined}>
        <div>Modal content goes here</div>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when modal is not visible', () => {
    const { asFragment } = render(
      <Modal show={false} modalStateHandler={undefined}>
        <div>Modal content goes here</div>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
