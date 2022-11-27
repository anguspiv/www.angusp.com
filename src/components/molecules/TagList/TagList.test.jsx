import { render, screen } from '@testing-library/react';
import { TagList } from './TagList';

describe('<TagList />', () => {
  it('should render the tag list', () => {
    expect.assertions(6);

    const tags = [
      {
        label: 'Tag 1',
        color: 'red',
      },
      {
        label: 'Tag 2',
        color: 'blue',
      },
      {
        label: 'Tag 3',
        color: 'green',
      },
      {
        label: 'Tag 4',
        color: 'yellow',
      },
    ];

    render(<TagList tags={tags} className="test-class" />);

    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(screen.getByText(tags[0].label)).toHaveAttribute(
      'href',
      `/tags/${tags[0].label.toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[1].label)).toHaveAttribute(
      'href',
      `/tags/${tags[1].label.toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[2].label)).toHaveAttribute(
      'href',
      `/tags/${tags[2].label.toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByText(tags[3].label)).toHaveAttribute(
      'href',
      `/tags/${tags[3].label.toLowerCase().replace(' ', '-')}`,
    );
    expect(screen.getByRole('list')).toHaveClass('test-class');
  });
});
