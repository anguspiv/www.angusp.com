import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionTitle from '@components/atoms/SectionTitle';
import ArticleCard from '@components/molecules/ArticleCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function ArticleList({ articles, title }) {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      {articles.map(
        ({
          slug,
          excerpt,
          // eslint-disable-next-line camelcase
          reading_time,
          // eslint-disable-next-line camelcase
          created_at,
          ...article
        }) => (
          <ArticleCard
            key={slug}
            // eslint-disable-next-line camelcase
            date={created_at}
            excerpt={excerpt}
            // eslint-disable-next-line camelcase
            readingTime={reading_time}
            slug={slug}
            title={article.title}
          />
        ),
      )}
    </Wrapper>
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
