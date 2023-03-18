import React from 'react';
import Landing from './Landing';
import { render, screen } from '@testing-library/react';

// it('should render the landing page', () => {
// 	render(<Landing />);
// });
test('Landing page should render ', () => {
	render(<Landing />);
});
