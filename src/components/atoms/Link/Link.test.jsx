import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {
  it('should render an internal link', () => {
    expect.assertions(4);

    const { rerender } = render(
      <Link href="/" aria-label="test">
        Link
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('aria-label', 'test');

    rerender(
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link href="" aria-label="test">
        Link
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'test' })).toHaveTextContent('Link');

    rerender(
      <Link href="#test" aria-label="test">
        Link
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('href', '#test');
  });

  it('should render an external link', () => {
    expect.assertions(3);

    render(
      <Link href="https://example.com" aria-label="test">
        Link
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute(
      'href',
      'https://example.com',
    );
    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'test' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
});
