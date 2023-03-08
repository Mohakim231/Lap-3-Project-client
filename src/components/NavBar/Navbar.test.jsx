import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.'

describe('NavBar component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        )
    })

    afterEach(() => {
        cleanup();
    })

    it('should display a heading', () => {
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

    it('displays a navbar with 4 links', () => {
        const nav = screen.getByRole("navigation")

        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(4)
    })

    it('takes you to the notes page when link is clicked', async () => {
        const link = screen.getByLabelText("notes page")
        
        await userEvent.click(link)
        expect(window.location.pathname).toBe("/create")
    })

    it('takes you to the Home page when link is clicked', async () => {
        const link = screen.getByLabelText("home page")
        
        await userEvent.click(link)
        expect(window.location.pathname).toBe("/")
    })

    it('takes you to the public notes page when link is clicked', async () => {
        const link = screen.getByLabelText("public notes page")
        
        await userEvent.click(link)
        expect(window.location.pathname).toBe("/Public")
    })

    it('takes you to the forum page when link is clicked', async () => {
        const link = screen.getByLabelText("forum page")
        
        await userEvent.click(link)
        expect(window.location.pathname).toBe("/forum")
    })

    afterEach(() => {
        cleanup()
    })
})