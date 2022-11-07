/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import { SEO } from './SEO';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const getMetaByNameQuery = (container, name) => container.querySelector(`meta[name="${name}"]`);

const getMetaByPropertyQuery = (container, property) =>
  container.querySelector(`meta[property="${property}"]`);

const queries = {
  getMetaByName: getMetaByNameQuery,
  getMetaByProperty: getMetaByPropertyQuery,
};

describe('<SEO />', () => {
  let originalEnv;

  const setup = () => {
    originalEnv = process.env;
    process.env = { ...originalEnv };
  };

  const teardown = () => {
    process.env = originalEnv;
  };

  const setupSEO = (props) => render(<SEO {...props} />, { queries, container: document.head });

  it('should render the seo', () => {
    expect.assertions(14);

    setup();

    process.env.DEPLOY_URL = 'https://example.com';

    const title = 'Test Title';
    const description = 'Test Description';
    const image = 'https://example.com/image.png';

    useRouter.mockReturnValue({
      asPath: '/test',
      isReady: true,
    });

    const { getMetaByName, getMetaByProperty } = setupSEO({ title, description, image });

    expect(document.title).toBe(title);
    expect(getMetaByProperty('og:title')).toHaveAttribute('content', title);
    expect(getMetaByName('twitter:title')).toHaveAttribute('content', title);
    expect(getMetaByName('description')).toHaveAttribute('content', description);
    expect(getMetaByProperty('og:description')).toHaveAttribute('content', description);
    expect(getMetaByName('twitter:description')).toHaveAttribute('content', description);
    expect(getMetaByName('image')).toHaveAttribute('content', image);
    expect(getMetaByProperty('og:image')).toHaveAttribute('content', image);
    expect(getMetaByName('twitter:image')).toHaveAttribute('content', image);
    expect(getMetaByProperty('og:type')).toHaveAttribute('content', 'website');
    expect(getMetaByProperty('og:url')).toHaveAttribute('content', 'https://example.com/test');
    expect(getMetaByName('twitter:card')).toHaveAttribute('content', 'summary');
    expect(getMetaByName('twitter:site')).toHaveAttribute('content', '@angusp');
    expect(getMetaByName('twitter:creator')).toHaveAttribute('content', '@angusp');

    teardown();
  });

  it('should render the seo with default url', () => {
    expect.assertions(1);

    setup();

    delete process.env.DEPLOY_URL;

    useRouter.mockReturnValue({
      asPath: '/test',
      isReady: true,
    });

    const { getMetaByProperty } = setupSEO();

    expect(getMetaByProperty('og:url')).toHaveAttribute('content', 'http://localhost:3000/test');

    teardown();
  });
});
