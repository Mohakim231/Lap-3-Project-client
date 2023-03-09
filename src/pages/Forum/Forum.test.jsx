import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, getByLabelText } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';

import { Note } from '../../components'

expect.extend(matchers);

import Forum from '.'

describe('Note component', () => {
    beforeEach(() => {
        render(<Forum />)
    })

    afterEach(() => {
        cleanup();
    })


    it('Should display a note', () => {
        const note = screen.getByLabelText('note');

        expect(note).toBeInTheDocument()
    })
})

