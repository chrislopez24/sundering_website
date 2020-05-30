import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './footer';

describe('Component Footer Tests', () =>{
    afterEach(cleanup)
    test('Test if the class social-media is presented and rendered', () => {
      const { container } = render(<Footer />);
      const linkElement = container.querySelector('.social-media')
      expect(linkElement).toBeInTheDocument();
    });
})
