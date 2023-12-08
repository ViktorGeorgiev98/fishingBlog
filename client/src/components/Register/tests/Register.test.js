import React from 'react';
import { describe, test, expect, jest, global } from '@jest/globals';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Register from './Register';

describe('Register Component', () => {
  test('Submitting the form with valid data', async () => {
    render(<Register />);

    // Mocking fetch to prevent network requests during testing
    const mockResponse = { ok: true, json: () => Promise.resolve({ message: 'Registration successful' }) };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockResponse));

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Repeat password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for the form submission and check if the redirection occurs
    await waitFor(() => expect(window.location.pathname).toBe('/login'));
  });

  test('Submitting the form with invalid data', async () => {
    render(<Register />);

    // Simulate user input (leaving fields empty)
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Repeat password'), { target: { value: '' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Check if alert messages are displayed for mandatory fields
    expect(window.alert).toHaveBeenCalledWith('All fields are mandatory!!!');
  });

  test('Submitting the form with different passwords', async () => {
    render(<Register />);

    // Simulate user input with different passwords
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Repeat password'), { target: { value: 'differentpassword' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Check if alert message is displayed for different passwords
    expect(window.alert).toHaveBeenCalledWith('Password and repeat password must be the same!!!');
  });
});
