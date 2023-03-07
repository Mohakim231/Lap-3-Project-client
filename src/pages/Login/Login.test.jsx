import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Login from '.'

describe('Login', () => {
    it('updates password variable when a password is entered', async () => {
        
    })
})