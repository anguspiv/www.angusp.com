import PropTypes from 'prop-types';
import NextLink from 'next/link';

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

Link.propTypes = {
  ...NextLink.propTypes,
  children: PropTypes.node,
};

Link.defaultProps = {
  ...NextLink.defaultProps,
  children: null,
};

export default Link;
