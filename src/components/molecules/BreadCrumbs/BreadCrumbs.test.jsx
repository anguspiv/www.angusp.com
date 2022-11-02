import { render, screen } from '@testing-library/react';
import { BreadCrumbs } from './BreadCrumbs';

describe('<BreadCrumbs />', () => {
  it('should render breadcrumb links', () => {
    expect.assertions(4);

    const location = {
      pathname: '/somewhere/else-where',
    };

    render(<BreadCrumbs location={location} className="test-class" />);

    expect(screen.getByRole('link', { name: 'Somewhere' })).toHaveAttribute('href', '/somewhere');

    expect(screen.getByText('Else Where')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');

    expect(screen.getByTestId('breadcrumbs')).toHaveClass('test-class');
  });
});
