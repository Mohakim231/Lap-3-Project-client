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
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    })

    afterEach(() => {
        cleanup();
    })

    it("takes you to the notes page when notes box link is clicked", async () => {
        const link = screen.getByLabelText("notes box link");
        await userEvent.click(link);
        expect(window.location.pathname).toBe("/notes");
    })

    it("takes you to the public notes page when th epublic notes box is clicked", async () => {
        const link = screen.getByLabelText("public notes box link");
        await userEvent.click(link);
        expect(window.location.pathname).toBe("/Public");
    });

    it("takes you to the public notes page when the public notes box is clicked", async () => {
        const link = screen.getByLabelText("public notes box link");
        await userEvent.click(link);
        expect(window.location.pathname).toBe("/Public");
    });

    it("take you to the forum page when the forum box is clicked", async () => {
        const link = screen.getByLabelText("forum box link");
        await userEvent.click(link);
        expect(window.location.pathname).toBe("/forum");
    })

});