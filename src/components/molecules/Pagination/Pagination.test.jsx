import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('should render the pagination links', () => {
    expect.assertions(1);

    render(<Pagination />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('should render the previous link', () => {
    expect.assertions(1);

    render(<Pagination prev="/to/prev" />);

    expect(screen.getByRole('link', { name: 'Previous' })).toHaveAttribute('href', '/to/prev');
  });

  it('should render the next link', () => {
    expect.assertions(1);

    render(<Pagination next="/to/next" />);

    expect(screen.getByRole('link', { name: 'Next' })).toHaveAttribute('href', '/to/next');
  });

  it('should render the current page and total pages', () => {
    expect.assertions(1);

    render(<Pagination curr={5} total={56} />);

    expect(screen.getByText('5 of 56')).toBeInTheDocument();
  });
});
