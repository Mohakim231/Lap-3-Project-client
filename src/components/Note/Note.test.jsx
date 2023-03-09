import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Note from '.'

describe('Note component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Note />
            </BrowserRouter>
            )
    })

    it('Should display a note title', () => {
        const noteTitle = screen.getByLabelText('noteTitle', {exact:false} );
        
        expect(noteTitle).toBeInTheDocument()
    })

    afterEach(() => {
        cleanup();
    })
})