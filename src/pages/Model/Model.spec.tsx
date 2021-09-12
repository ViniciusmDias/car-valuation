import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Model } from '.';

afterEach(() => {
  cleanup();
});

describe('Whens Model page renderize', () => {
  it('Shows text in page', () => {
    render(
      <BrowserRouter>
        <Model />
      </BrowserRouter>,
    );

    expect(screen.getByText('Seu')).toBeInTheDocument();
  });
});
