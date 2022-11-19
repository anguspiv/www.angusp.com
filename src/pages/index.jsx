import { PropTypes } from 'prop-types';
import { css } from '@emotion/react';
import { spacing } from '@styles/utils';
import { getAllPosts, getContentBySlug } from '@lib/api';
import { markdownToHtml } from '@lib/markdownToHtml';
import { Container } from '@components/atoms/Container';
import { PageHeader } from '@components/molecules/PageHeader';
import { ArticleList } from '@components/organisms/ArticleList';

const DEFAULT_TITLE = "Hi, I'm Angus!";

function Home({ posts, about }) {
  return (
    <>
      <PageHeader title={about?.title || DEFAULT_TITLE} />
      {about?.content && (
        <Container
          css={css`
            margin: ${spacing(4)} 0;
          `}
        >
          <div
            css={css`
              & img {
                margin: 0 auto;
                width: 100%;
              }
            `}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: about.content }}
          />
        </Container>
      )}
      {posts.length > 0 && <ArticleList articles={posts} title="Recent Posts" />}
    </>
  );
}

Home.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      excerpt: PropTypes.string,
      featured: PropTypes.bool,
      readingTime: PropTypes.number,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  about: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

Home.defaultProps = {
  posts: [],
  about: null,
};

export const getStaticProps = async () => {
  const about = getContentBySlug('about', ['title', 'content']);
  const posts = await getAllPosts(['title', 'date', 'excerpt', 'tags', 'slug', 'readingTime']);

  const content = await markdownToHtml(about.content || '');

  return {
    props: {
      about: {
        ...about,
        content,
      },
      posts,
    },
  };
};

export default Home;
