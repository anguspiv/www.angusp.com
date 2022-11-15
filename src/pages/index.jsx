import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { getAllPosts } from '@lib/api';
import { Container } from '@components/atoms/Container';
import { PageHeader } from '@components/molecules/PageHeader';
import { ArticleList } from '@components/organisms/ArticleList';

function Home({ posts }) {
  return (
    <>
      <PageHeader title="Hi, I'm Angus!" />
      <Container>
        <p>
          I&apos;m a software engineer and manager based in Los Angeles, CA. I specialize in web
          applications and the JavaScript ecosystem. Feel free to learn more{' '}
          <Link href="/about">about me</Link>, check out my <Link href="/resume">resume</Link> or
          read some of my <Link href="/posts">posts</Link>.
        </p>
      </Container>
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
};

Home.defaultProps = {
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

export default Home;
