import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import Image from 'next/image';
import { spacing, media } from '@styles/utils';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';
import { TagList } from '@components/molecules/TagList';
import { formatDate } from '@utils/date';

const headerCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${spacing(2)};
`;

const titleCss = css`
  order: 2;
  width: 100%;
  max-width: var(--page-width);
  margin: ${spacing(2)} auto ${spacing(1)};
`;

const detailsCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  order: 2;
  width: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
`;

const detailCss = css`
  font-size: 0.8rem;
`;

const readingTimeCss = css`
  ${detailCss}
  color: var(--text-muted);
  font-style: italic;
`;

const tagsWrapperCss = css`
  order: 2;
  width: 100%;
  max-width: var(--page-width);
  margin: 0 auto ${spacing(3)};
`;

const headerTagsCss = css`
  max-width: ${rem(300)};
`;

const excerptCss = css`
  order: 2;
  max-width: var(--page-width);
  margin: 0 auto ${spacing(3)};
  font-style: oblique;

  ${media.lg} {
    font-style: 1.2rem;
  }
`;

const imageWrapperCss = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  width: calc(100% + ${spacing(4)});
  max-width: none;
  height: auto;
  max-height: ${rem(480)};
  margin: 0 -${spacing(2)} ${spacing(4)};
  overflow: hidden;
  aspect-ratio: 16 / 5;
`;

export function PageHeader({
  excerpt,
  featuredImage,
  location,
  publishDate,
  readingTime,
  tags,
  title,
  variant,
}) {
  const hasDetails = !!publishDate;
  const imageTop = variant === 'imageTop';
  const formattedDate = formatDate(publishDate);

  return (
    <header css={headerCss}>
      <h1 css={titleCss}>{title}</h1>
      {!!location?.pathname && <BreadCrumbs location={location} />}
      {hasDetails && (
        <div css={detailsCss}>
          {formattedDate && <span css={detailCss}>{formattedDate}</span>}
          {!!readingTime && <span css={readingTimeCss}>Reading Time: {readingTime} min.</span>}
        </div>
      )}
      {!!tags?.length && (
        <div css={tagsWrapperCss}>
          <TagList tags={tags} css={headerTagsCss} />
        </div>
      )}
      {excerpt && <p css={excerptCss}>{excerpt}</p>}
      {featuredImage && (
        <div
          css={css`
            ${imageWrapperCss}
            ${imageTop && 'order: 1; margin-bottom: 0;'}
          `}
          data-testId="featured-image"
        >
          <Image src={featuredImage} layout="fill" alt="" objectFit="cover" />
        </div>
      )}
    </header>
  );
}

PageHeader.propTypes = {
  excerpt: PropTypes.string,
  featuredImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ src: PropTypes.string }),
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  publishDate: PropTypes.string,
  readingTime: PropTypes.number,
  tags: TagList.propTypes.tags,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'imageTop']),
};

PageHeader.defaultProps = {
  excerpt: null,
  featuredImage: null,
  location: null,
  publishDate: null,
  readingTime: null,
  tags: null,
  variant: 'default',
};

export default PageHeader;
