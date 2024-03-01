import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 

import SwitchInput from './index';

const iosSwitch = "iosswitch";

describe('SwitchInput', () => {


    it("renders without crashing", () => {
        render(<SwitchInput checked={''} onChange={undefined} />);
      });

      
});
