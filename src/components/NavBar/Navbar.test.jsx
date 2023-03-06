import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.'

import NavBar from '.'

describe('NavBar component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        )
    })

    it('displays a NavBar with 2 children', () => {
        const nav = screen.getByRole("navigation")

        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(2)
    })

    afterEach(() => {
        cleanup()
    })
})