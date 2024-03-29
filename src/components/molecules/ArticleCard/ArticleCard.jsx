import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Link from 'next/link';
import { rem } from 'polished';
import { media, spacing } from '@styles/utils';
import { Container } from '@components/atoms/Container';
import { Divider } from '@components/atoms/Divider';
import { theme } from '@styles/theme';
import { formatDate } from '@utils/date';

export function ArticleCard({ date, excerpt, featured, readingTime, slug, title }) {
  const detail = css`
    margin-bottom: 0;
    font-size: ${featured ? rem('14px') : rem('12px')};
    margin-right: ${spacing(0.5)};

    & + *::before {
      margin-right: ${spacing(0.5)};
      content: '-';
    }
  `;

  const formattedDate = formatDate(date);

  return (
    <Link href={`/posts/${slug}`} passHref>
      <a
        href={`/posts/${slug}`}
        data-testid="article-card"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 0 auto ${spacing(2)};
          color: ${theme.text.color.default};
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          text-decoration: none;
          max-width: var(--page-width);

          &:hover {
            color: ${theme.text.color.default};
            text-decoration: none;
          }
        `}
      >
        <Container>
          <div
            css={css`
              display: inline-flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 0;
              color: ${theme.link.color.default};
              font-size: ${featured ? rem(26) : rem(20)};
              transition: all 0.2s ease-in-out;

              a:hover & {
                color: ${theme.link.color.hover};
              }
            `}
          >
            <span
              css={css`
                line-height: 1.2;
              `}
            >
              {title}
            </span>
            <Divider
              css={css`
                width: 0;
                margin-bottom: ${spacing(0.5)};
                transition: all 0.2s ease-in-out;

                a:hover & {
                  width: 100%;
                }
              `}
              color={theme.colors.blue}
            />
          </div>
          <p
            css={css`
              margin-bottom: ${spacing(1)};
              font-size: ${featured ? rem(14) : rem(12)};
            `}
          >
            {excerpt}
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: column;

              ${media.sm} {
                flex-direction: row;
              }
            `}
          >
            {formattedDate && (
              <p
                css={css`
                  ${detail}
                  color: ${theme.colors.blue};
                `}
              >
                {formattedDate}
              </p>
            )}
            {!!readingTime && (
              <p
                css={css`
                  ${detail}
                  color: ${theme.text.color.muted};
                  font-style: italic;
                `}
              >
                {readingTime?.text || `${readingTime} min. read`}
              </p>
            )}
          </div>
        </Container>
      </a>
    </Link>
  );
}

ArticleCard.propTypes = {
  date: PropTypes.string,
  excerpt: PropTypes.string,
  featured: PropTypes.bool,
  readingTime: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ text: PropTypes.string })]),
  slug: PropTypes.string,
  title: PropTypes.string,
};

ArticleCard.defaultProps = {
  date: '',
  excerpt: '',
  featured: false,
  readingTime: 0,
  slug: '',
  title: '',
};

export default ArticleCard;
