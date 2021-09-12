import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '.';

afterEach(() => {
  cleanup();
});

describe('Whens Home page renderize', () => {
  it('Shows containers in page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});