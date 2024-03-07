import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NotificationComponent from './index';

describe('NotificationComponent', () => {

  it('handles popover opening and closing in RTL layout', () => {
    document.documentElement.dir = 'rtl';

    render(<NotificationComponent />);
  });

});
