import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { spacing } from '@styles/utils';
import { getAllPosts } from '@lib/api';
import { Container } from '@components/atoms/Container';
import { PageHeader } from '@components/molecules/PageHeader';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';
import { FeaturedArticle } from '@components/organisms/FeaturedArticle';
import { ArticleList } from '@components/organisms/ArticleList';

function Posts({ posts }) {
  const featuredPost = posts[0];
  const morePosts = posts.slice(1);

  const location = useRouter();

  return (
    <>
      <PageHeader title="Posts" />
      <Container
        css={css`
          margin-bottom: ${spacing(2)};
        `}
      >
        <BreadCrumbs location={location} />
      </Container>
      <FeaturedArticle article={featuredPost} />
      {morePosts.length > 0 && <ArticleList articles={morePosts} title="Recent Posts" />}
    </>
  );
}

Posts.propTypes = {
  posts: ArticleList.propTypes.articles,
};

Posts.defaultProps = {
  posts: [],
};

export const getStaticProps = async () => {
  const posts = await getAllPosts(['title', 'date', 'excerpt', 'tags', 'slug', 'readingTime']);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
