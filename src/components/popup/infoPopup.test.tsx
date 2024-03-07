import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoPopup from './infoPopup'; 

describe('InfoPopup Component', () => {

 it('does not render when modalOpenState is false', () => {
    const { container } = render(
      <InfoPopup
        success={true}
        modalOpenState={false}
        modalStateHandler={() => {}}
        children="Success message"
      />
    );

    expect(container.firstChild).toBeNull();
 });
});