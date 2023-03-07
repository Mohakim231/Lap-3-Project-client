import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Home from '.'


describe('Home', () => {
    beforeEach(() => {
        render(<Home />)
    })

    it('Has 4 links to different pagees on the homepage')
})