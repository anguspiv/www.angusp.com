import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import Link from 'next/link';

const listCss = css`
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const listItemCss = css`
  margin: 0;
  font-size: ${rem('12px')};
`;

const crumbCss = css`
  color: var(--link-color-default);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--link-color-hover);
    text-decoration: none;
  }
`;

const separatorCss = css`
  margin: 0 0.25rem;
`;

const toTitleCase = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function BreadCrumbs({ location, className }) {
  const { pathname } = location;
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const label = toTitleCase(segment);
    const path = `/${segments.slice(0, index + 1).join('/')}`;

    return {
      label,
      path,
      isLast,
    };
  });

  return (
    <nav data-testid="breadcrumbs" className={className}>
      <ul css={listCss}>
        <li css={listItemCss}>
          <Link href="/" passHref>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a css={crumbCss} href="/">
              Home
            </a>
          </Link>
        </li>
        {crumbs.map(({ label, path, isLast }) => (
          <li key={path} css={listItemCss}>
            <span css={separatorCss}>/</span>
            {isLast ? (
              <span>{label}</span>
            ) : (
              <Link href={path} passHref>
                <a css={crumbCss} href={path}>
                  {label}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

BreadCrumbs.propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
};

BreadCrumbs.defaultProps = {
  className: null,
  location: {
    pathname: '',
    search: '',
  },
};

export default BreadCrumbs;
