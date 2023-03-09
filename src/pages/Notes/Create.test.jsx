import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Notes from '.'

describe('Notes page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Notes />
            </BrowserRouter>
        )
    })

    afterEach(() => {
        cleanup();
    })

    it('should have note content on the page', () => {
        const noteContent = screen.getByLabelText("note content");
        expect(noteContent).toBeInTheDocument();
    })
})
