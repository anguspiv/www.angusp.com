import { render, screen } from '@testing-library/react';
import { TagList } from './TagList';

describe('<TagList />', () => {
  it('should render the tag list', () => {
    expect.assertions(5);

    const tags = [
      { label: 'Tag 1', slug: 'tag-1', color: '#fff' },
      { label: 'Tag 2', slug: 'tag-2', color: '#f00' },
      { label: 'Tag 3', slug: 'tag-3', color: '#ff0' },
      { label: 'Tag 4', slug: 'tag-4', color: '#f0f' },
    ];

    render(<TagList tags={tags} className="test-class" />);

    expect(screen.getByText(tags[0].label)).toHaveAttribute('href', `/tags/${tags[0].slug}`);
    expect(screen.getByText(tags[1].label)).toHaveAttribute('href', `/tags/${tags[1].slug}`);
    expect(screen.getByText(tags[2].label)).toHaveAttribute('href', `/tags/${tags[2].slug}`);
    expect(screen.getByText(tags[3].label)).toHaveAttribute('href', `/tags/${tags[3].slug}`);
    expect(screen.getByRole('list')).toHaveClass('test-class');
  });
});
