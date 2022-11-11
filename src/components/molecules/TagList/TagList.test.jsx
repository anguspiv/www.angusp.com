import { render, screen } from '@testing-library/react';
import { TagList } from './TagList';

describe('<TagList />', () => {
  it('should render the tag list', () => {
    expect.assertions(6);

    const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'];

    render(<TagList tags={tags} className="test-class" />);

    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(screen.getByText(tags[0])).toHaveAttribute(
      'href',
      `/tags/${tags[0].toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[1])).toHaveAttribute(
      'href',
      `/tags/${tags[1].toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[2])).toHaveAttribute(
      'href',
      `/tags/${tags[2].toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[3])).toHaveAttribute(
      'href',
      `/tags/${tags[3].toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByRole('list')).toHaveClass('test-class');
  });
});
