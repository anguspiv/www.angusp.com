import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { ArticleCard } from '@components/molecules/ArticleCard';

const featuredCss = css`
  display: flex;
  flex-direction: column;
`;

export function FeaturedArticle({ article }) {
  return (
    <div css={featuredCss}>
      <SectionTitle>Featured</SectionTitle>
      <ArticleCard
        date={article.date}
        excerpt={article.excerpt}
        readingTime={article.readingTime}
        slug={article.slug}
        title={article.title}
        featured
      />
    </div>
  );
}

FeaturedArticle.propTypes = {
  article: PropTypes.shape(ArticleCard.propTypes),
};

FeaturedArticle.defaultProps = {
  article: null,
};

export default FeaturedArticle;
