import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('<Image />', () => {
  it('should render an img', () => {
    expect.assertions(4);

    const src = 'https://example.com/images/profile.png';
    const alt = 'Example Name';
    const title = 'Example Title';

    render(<Image src={src} alt={alt} className="test-class" title={title} />);

    expect(screen.getByRole('img')).toHaveAttribute('src');

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Example Name');

    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByRole('figure')).toHaveClass('test-class');
  });
});
