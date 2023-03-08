import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Post from '.'

describe('Post component', () => {
    beforeEach(() => {
        render(<Post />)
    })

    it('should display a textbox', () => {
        const textbox = screen.getByLabelText("what's on your mind");

        expect(textbox).toBeInTheDocument()
    })

    it('should have post and delete buttons', () => {
        const postButton = screen.getByLabelText("post button")
        const deleteButton = screen.getByLabelText("delete button")

        expect (postButton, deleteButton).toBeInTheDocument();
    })

    afterEach(() => {
        cleanup();
    })
})