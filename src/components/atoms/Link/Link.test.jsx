import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {
  it('should render a link', () => {
    expect.assertions(2);

    render(
      <Link href="/" aria-label="test">
        Link
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('aria-label', 'test');
  });
});
