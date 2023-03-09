import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Home from '.';


describe('Home', () => {
    beforeEach(() => {
        render(<Home />);
    })

    afterEach(() => {
        cleanup();
    })

    it("takes you to the notes page when notes box link is clicked", async () => {
        const link = screen.getByLabelText("notes box link");
        await userEvent.click(link);
        expect(window.location.pathname).toBe("/notes");
    })

})