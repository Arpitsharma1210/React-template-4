import React from 'react';
import { render, screen } from '@testing-library/react';
import NameAvatar from './index';

describe('NameAvatar component', () => {
    it('renders correctly in RTL layout', () => {
        document.documentElement.dir = 'rtl';
    
        render(<NameAvatar name="John Doe" />);
      });

});
