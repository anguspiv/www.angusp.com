import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('<Container />', () => {
  it('should render a container', () => {
    expect.assertions(2);

    const child = 'Test';

    render(<Container>{child}</Container>);

    expect(screen.getByText('Test')).toBeInTheDocument();

    expect(screen.getByText('Test')).toHaveStyle(`
      margin: 0 auto;
      padding: 0 1rem;
      max-width: var(--page-width);
    `);
  });

  it('should render a container with a className', () => {
    expect.assertions(1);

    const child = 'Test';

    render(<Container className="test">{child}</Container>);

    expect(screen.getByText('Test')).toHaveClass('test');
  });
});
