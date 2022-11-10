import { render, screen } from '@testing-library/react';
import { SiteBanner } from './SiteBanner';

describe('<SiteBanner />', () => {
  it('should render the banner', () => {
    expect.assertions(14);

    render(<SiteBanner className="test-class" />);

    expect(screen.getByRole('banner')).toHaveClass('test-class');
    expect(screen.getByRole('link', { name: 'Angus Perkerson' })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Angus Perkerson')).toBeInTheDocument();
    expect(
      screen.getByText('Software Engineer and Manager specializing in Web Applicaton development.'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email angusp@angusp.com' })).toHaveAttribute(
      'href',
      'mailto:angusp@angusp.com',
    );
    expect(screen.getByRole('link', { name: 'Github Profile' })).toHaveAttribute(
      'href',
      'https://github.com/anguspiv',
    );
    expect(screen.getByRole('link', { name: 'Twitter Profile' })).toHaveAttribute(
      'href',
      'https://twitter.com/angusp',
    );

    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/aperkerson',
    );
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume');
  });
});
