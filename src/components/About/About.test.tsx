import * as React from 'react';
import { render } from '@testing-library/react';
import About from './About';


describe('About', () => {
  it('renders About component', () => {
    const sut = render(<About />);
    expect(sut).toMatchSnapshot();
  });
});