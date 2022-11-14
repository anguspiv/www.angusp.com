import { render, screen } from '@testing-library/react';
import { TagCard } from './TagCard';

describe('<TagCard />', () => {
  it('should render the tag card', () => {
    expect.assertions(5);

    render(
      <TagCard
        title="JavaScript"
        slug="javascript"
        description="Test description"
        postCount={1}
        className="test-class"
      />,
    );

    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tags/javascript');
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('1 post')).toBeInTheDocument();
    expect(screen.getByTestId('tag-card')).toHaveClass('test-class');
  });
});
