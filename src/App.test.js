// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxonContext title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxonContext/i);
    expect(titleElement).toBeInTheDocument();
});
