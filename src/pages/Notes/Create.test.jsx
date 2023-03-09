import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Create from '.'

describe('create page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Create />
            </BrowserRouter>
        )
    })

    afterEach(() => {
        cleanup();
    })

})
