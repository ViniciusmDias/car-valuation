import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Year } from '.';

afterEach(() => {
  cleanup();
});

describe('Whens Year page renderize', () => {
  it('Shows modelo text in page', () => {
    render(
      <BrowserRouter>
        <Year />
      </BrowserRouter>,
    );

    expect(screen.getByText('modelo')).toBeInTheDocument();
  });
});
