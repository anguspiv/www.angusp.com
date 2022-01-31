import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  const setupPageHeader = (props) =>
    render(
      <ThemeProvider theme={theme}>
        <PageHeader {...props} />
      </ThemeProvider>,
    );

  it('should render without crashing', () => {
    expect.assertions(1);

    const { container } = setupPageHeader();

    expect(container).toBeTruthy();
  });

  it('should render the title', () => {
    expect.assertions(1);

    const title = 'Test Header Text';

    const { getByText } = setupPageHeader({ title });

    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render the h1 tag', () => {
    expect.assertions(1);

    const title = 'Test Header Text';

    const { getByRole } = setupPageHeader({ title });

    expect(getByRole('heading')).toHaveTextContent(title);
  });

  it('should render the reading time', () => {
    expect.assertions(1);

    const readingTime = 7;

    const { getByText } = setupPageHeader({ readingTime });

    expect(getByText(`Reading Time: ${readingTime} min.`)).toBeInTheDocument();
  });

  it('should render the publishDate', () => {
    expect.assertions(1);

    const publishDate = '2020-01-01';

    const { getByText } = setupPageHeader({ publishDate });

    expect(getByText(publishDate)).toBeInTheDocument();
  });

  it('should display the excerpt', () => {
    expect.assertions(1);

    const excerpt = 'Test excerpt text for the page header';

    const { getByText } = setupPageHeader({ excerpt });

    expect(getByText(excerpt)).toBeInTheDocument();
  });

  it('should display the featuredImage', () => {
    expect.assertions(1);

    const featuredImage = 'https://via.placeholder.com/300x200';

    const { getByRole } = setupPageHeader({ featuredImage });

    expect(getByRole('img')).toHaveAttribute('src', featuredImage);
  });
});
