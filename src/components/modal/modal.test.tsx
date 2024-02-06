import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('renders modal content with heading and close button', () => {
    const handleClose = jest.fn(); 
    const heading = 'Test Modal';
    const subHeading = 'This is a test modal';
    const headingImgSrc = '/path/to/image.jpg';

    render(
      <Modal show={true} onClose={handleClose} heading={heading} subHeading={subHeading} headingImgSrc={headingImgSrc}>
        <div>Modal content goes here</div>
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal')).toBeInTheDocument();   
  });
  
  it('renders with fit-content width', () => {
    render(
      <Modal show={true} fitContent={true}>
        <div>Modal content goes here</div>
      </Modal>
    );

    const modalContainer = screen.getByTestId('modal-container');

    // Assert that modal container is rendered
    expect(modalContainer).toBeInTheDocument();

    // Assert that modal container has the correct width style
    expect(modalContainer).toHaveStyle({ width: 'fit-content' });
  });
});
