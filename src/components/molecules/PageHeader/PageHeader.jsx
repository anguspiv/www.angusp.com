import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { rem } from 'polished';
import Tags from '@components/molecules/Tags';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.headingsMarginBottom};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  order: 2;
  width: 100%;
  max-width: ${({ theme }) => theme.page.width};
  margin: 0 auto ${({ theme }) => theme.spacing(1)};
`;

const Title = styled.h1`
  order: 2;
  width: 100%;
  max-width: ${({ theme }) => theme.page.width};
  margin: 0 auto ${({ theme }) => theme.headingsMarginBottom};

  & + ${Details} {
    margin-top: calc(0.25rem - ${({ theme }) => theme.headingsMarginBottom});
  }
`;

const TagsWrapper = styled.div`
  order: 2;
  width: 100%;
  max-width: ${({ theme }) => theme.page.width};
  margin: 0 auto ${({ theme }) => theme.spacing(3)};
`;

const HeaderTags = styled(Tags)`
  max-width: ${rem(300)};
`;

const Detail = styled.span`
  font-size: 0.8rem;
`;

const PublishedAt = styled(Detail)``;

const ReadTime = styled(Detail)`
  color: ${({ theme }) => theme.colors.text.muted};
  font-style: italic;
`;

const Excerpt = styled.p`
  order: 2;
  max-width: ${({ theme }) => theme.page.width};
  margin-right: auto;
  margin-left: auto;
  font-style: oblique;
  ${up('lg')} {
    font-size: 1.2rem;
  }
`;

const FeaturedImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${({ positionTop }) => (positionTop ? '1' : '2')};
  width: calc(100% + ${({ theme }) => theme.spacing(4)});
  max-width: none;
  height: auto;
  max-height: 480px;
  margin-top: ${({ positionTop, theme }) =>
    positionTop ? `calc( -1 * ${theme.headingsMarginBottom} )` : '0'};
  margin-right: ${({ theme }) => theme.spacing(-2)};
  margin-bottom: ${({ theme }) => theme.paragraphMarginBottom};
  margin-left: ${({ theme }) => theme.spacing(-2)};
  overflow: hidden;

  ${({ theme }) => up('lg')`
    width: calc(100% + ${theme.spacing(8)});
    margin-right: ${theme.spacing(-4)};
    margin-left: ${theme.spacing(-4)};
  `}
`;

const Image = styled.img`
  margin-bottom: 0;
`;

function PageHeader({ title, publishDate, readingTime, excerpt, featuredImage, imageFirst, tags }) {
  const hasDetails = !!(publishDate || readingTime);

  return (
    <Header>
      <Title>{title}</Title>
      {hasDetails && (
        <Details>
          {publishDate && <PublishedAt>{publishDate}</PublishedAt>}
          {!!readingTime && <ReadTime>Reading Time: {readingTime} min.</ReadTime>}
        </Details>
      )}
      {!!tags && (
        <TagsWrapper>
          <HeaderTags tags={tags} />
        </TagsWrapper>
      )}
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
      {featuredImage && (
        <FeaturedImageWrapper positionTop={imageFirst}>
          <Image src={featuredImage} alt="" />
        </FeaturedImageWrapper>
      )}
    </Header>
  );
}

PageHeader.propTypes = {
  excerpt: PropTypes.node,
  featuredImage: PropTypes.string,
  imageFirst: PropTypes.bool,
  publishDate: PropTypes.string,
  readingTime: PropTypes.number,
  title: PropTypes.node,
  tags: Tags.propTypes.tags,
};

PageHeader.defaultProps = {
  excerpt: null,
  featuredImage: null,
  imageFirst: false,
  publishDate: null,
  readingTime: null,
  title: null,
  tags: [],
};

export default PageHeader;
