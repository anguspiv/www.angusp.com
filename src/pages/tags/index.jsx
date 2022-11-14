import { PropTypes } from 'prop-types';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { spacing } from '@styles/utils';
import { getAllTags } from '@lib/api';
import { Container } from '@components/atoms/Container';
import { PageHeader } from '@components/molecules/PageHeader';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';
import { TagCard } from '@components/molecules/TagCard';
import { Divider } from '@components/atoms/Divider';

function Tags({ tags }) {
  const location = useRouter();

  return (
    <>
      <PageHeader title="Tags" />
      <Container
        css={css`
          margin-bottom: ${spacing(2)};
        `}
      >
        <BreadCrumbs location={location} />
      </Container>
      {tags.map(({ title, slug, content, postCount }, index) => (
        <>
          {tags.length > 1 && index !== 0 && (
            <Divider
              css={css`
                width: 75%;
                margin: 0 12.5%;
              `}
            />
          )}
          <TagCard
            key={slug}
            title={title}
            description={content}
            slug={slug}
            postCount={postCount}
          />
        </>
      ))}
    </>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      postCount: PropTypes.number,
    }),
  ),
};

Tags.defaultProps = {
  tags: [],
};

export const getStaticProps = async () => {
  const tags = await getAllTags(['title', 'description', 'slug', 'content', 'postCount']);
  return {
    props: {
      tags,
    },
  };
};

export default Tags;
