import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  it('should render an img', () => {
    expect.assertions(3);

    const src = 'https://example.com/images/profile.png';
    const alt = 'Example Name';

    render(<Avatar src={src} alt={alt} className="test-class" />);

    expect(screen.getByRole('img')).toHaveAttribute('src');

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Example Name');

    expect(screen.getByTestId('avatar')).toHaveClass('test-class');
  });
});
