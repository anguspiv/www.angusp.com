import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { SectionTitle } from '@components/molecules/SectionTitle';
import { ArticleCard } from '@components/molecules/ArticleCard';

const listCss = css`
  display: flex;
  flex-direction: column;
`;

export function ArticleList({ title, articles }) {
  return (
    <div css={listCss}>
      <SectionTitle>{title}</SectionTitle>
      {articles.map(({ slug, excerpt, readingTime, date, title: articleTitle }) => (
        <ArticleCard
          key={slug}
          date={date}
          excerpt={excerpt}
          readingTime={readingTime}
          slug={slug}
          title={articleTitle}
        />
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.shape(ArticleCard.propTypes)),
};

ArticleList.defaultProps = {
  title: '',
  articles: [],
};

export default ArticleList;
