import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});

// babel.config.js
// module.exports = { presets: [ '@babel/preset-env', '@babel/preset-react' ] };
