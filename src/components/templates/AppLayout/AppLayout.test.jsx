import { render, screen } from '@testing-library/react';
import { AppLayout } from './AppLayout';

describe('<AppLayout />', () => {
  it('should render the layout', () => {
    expect.assertions(4);

    render(
      <AppLayout>
        <div>Content</div>
      </AppLayout>,
    );

    const year = new Date().getFullYear();
    const footerText = `© ${year}`;
    const footerRegex = new RegExp(footerText, 'ig');

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText(footerRegex)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Next.js' })).toBeInTheDocument();
  });
});
