import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Divider from '@components/atoms/Divider';

const Content = styled.div`
  max-width: ${({ theme }) => theme.page.width};
`;

const Title = styled.h2`
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.link.default};
  transition: all 0.2s ease-in-out;
`;

const TitleLabel = styled.span``;

const TitleDivider = styled(Divider)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Excerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Date = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const ReadingTime = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.8rem;
  font-style: italic;
  text-transform: uppercase;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text.default};
    text-decoration: none;

    & ${Title} {
      color: ${({ theme }) => theme.colors.link.hover};
    }
  }
`;

function ArticleCard({ date, excerpt, readingTime, slug, title }) {
  return (
    <Card as={Link} to={`/articles/${slug}`}>
      <Content>
        {date && <Date>{date}</Date>}
        <Title>
          <TitleLabel>{title}</TitleLabel>
          <TitleDivider />
        </Title>
        <Excerpt>{excerpt}</Excerpt>
        {readingTime && <ReadingTime>{readingTime} min. read</ReadingTime>}
      </Content>
    </Card>
  );
}

ArticleCard.propTypes = {
  date: PropTypes.string,
  excerpt: PropTypes.string,
  readingTime: PropTypes.number,
  slug: PropTypes.string,
  title: PropTypes.string,
};

ArticleCard.defaultProps = {
  date: '',
  excerpt: '',
  readingTime: 0,
  slug: '',
  title: '',
};

export default ArticleCard;
