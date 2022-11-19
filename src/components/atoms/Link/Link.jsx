import PropTypes from 'prop-types';
import NextLink from 'next/link';

const isInternalLink = (href) => {
  if (href === '') {
    return true;
  }

  if (href?.startsWith('/')) {
    return true;
  }

  if (href?.startsWith('#')) {
    return true;
  }

  return false;
};

export function Link({
  as,
  children,
  href,
  legacyBehavior,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}) {
  if (isInternalLink(href)) {
    return (
      <NextLink
        href={href}
        legacyBehavior={legacyBehavior}
        passHref={passHref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
      >
        <a href={href} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

Link.propTypes = {
  ...NextLink.propTypes,
  children: PropTypes.node,
};

Link.defaultProps = {
  ...NextLink.defaultProps,
  children: null,
};

export default Link;
