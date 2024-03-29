import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { css } from '@emotion/react';
import { CMS_HOST } from '@constants/hosts';
import { getPostBySlug, getAllPosts, getTagBySlug } from '@lib/api';
import { markdownToHtml } from '@lib/markdownToHtml';
import { SEO } from '@components/organisms/SEO';
import { PageHeader } from '@components/molecules/PageHeader';
import { Container } from '@components/atoms/Container';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, date, content, tags, excerpt, featuredImage, ogImage, readingTime } = post;

  const labels = {
    '[slug]': title,
  };

  return (
    <article>
      <SEO title={title} description={excerpt} image={`${CMS_HOST}${ogImage}`} />
      <Container>
        <BreadCrumbs location={router} labels={labels} />
      </Container>
      <PageHeader
        title={title}
        publishDate={date}
        tags={tags}
        featuredImage={`${CMS_HOST}${featuredImage}`}
        readingTime={readingTime}
      />
      <Container>
        <div
          css={css`
            & img {
              margin: 0 auto;
              width: 100%;
            }
          `}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    featuredImage: PropTypes.string,
    ogImage: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    excerpt: PropTypes.string,
    readingTime: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        text: PropTypes.string,
      }),
    ]),
  }).isRequired,
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'featuredImage',
    'ogImage',
    'tags',
    'readingTime',
  ]);
  const content = await markdownToHtml(post.content || '');

  const tags = post.tags.map((tag) => {
    const slug = tag.toLowerCase().replace(/ /g, '-');

    const { color } = getTagBySlug(slug, ['color']);
    return {
      label: tag,
      color,
    };
  });

  return {
    props: {
      post: {
        ...post,
        tags,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
