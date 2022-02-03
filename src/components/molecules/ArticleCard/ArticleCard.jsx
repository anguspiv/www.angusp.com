import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled, { useTheme } from 'styled-components';
import { up } from 'styled-breakpoints';
import Divider from '@components/atoms/Divider';

const Content = styled.div`
  max-width: ${({ theme }) => theme.page.width};
`;

const Title = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.link.default};
  font-size: ${({ featured }) => (featured ? rem('26px') : rem('20px'))};
  transition: all 0.2s ease-in-out;
`;

const TitleLabel = styled.span`
  line-height: 1.2;
`;

const TitleDivider = styled(Divider)`
  width: 0;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

const Excerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ featured }) => (featured ? rem('16px') : rem('14px'))};
`;

const Detail = styled.p`
  margin-bottom: 0;
  font-size: ${({ featured }) => (featured ? rem('14px') : rem('12px'))};
  text-transform: uppercase;

  ${up('sm')} {
    & + &::before {
      margin-right: ${({ theme }) => theme.spacing(0.5)};
      margin-left: ${({ theme }) => theme.spacing(0.5)};
      content: '-';
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  ${up('sm')} {
    flex-direction: row;
  }
`;

const Date = styled(Detail)`
  color: ${({ theme }) => theme.colors.blue};
`;

const ReadingTime = styled(Detail)`
  color: ${({ theme }) => theme.colors.text.muted};
  font-style: italic;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.paragraphMarginBottom};
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text.default};
    text-decoration: none;

    & ${Title} {
      color: ${({ theme }) => theme.colors.link.hover};
    }

    & ${TitleDivider} {
      width: 100%;
    }
  }
`;

function ArticleCard({ date, excerpt, featured, readingTime, slug, title }) {
  const theme = useTheme();

  return (
    <Card as={Link} to={`/articles/${slug}`}>
      <Content>
        <Title featured={featured}>
          <TitleLabel>{title}</TitleLabel>
          <TitleDivider color={theme.colors.blue} />
        </Title>
        <Excerpt featured={featured}>{excerpt}</Excerpt>
        <Details>
          {date && <Date featured={featured}>{date}</Date>}
          {readingTime && <ReadingTime featured={featured}>{readingTime} min. read</ReadingTime>}
        </Details>
      </Content>
    </Card>
  );
}

ArticleCard.propTypes = {
  date: PropTypes.string,
  excerpt: PropTypes.string,
  featured: PropTypes.bool,
  readingTime: PropTypes.number,
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
