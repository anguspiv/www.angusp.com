import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { CMS_HOST } from '@constants/hosts';
import { getTagBySlug, getPostsByTag, getAllTags } from '@lib/api';
import { SEO } from '@components/organisms/SEO';
import { PageHeader } from '@components/molecules/PageHeader';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';
import { ArticleList } from '@components/organisms/ArticleList';
import { Container } from '@components/atoms/Container';

export default function Tag({ tag, posts }) {
  const router = useRouter();

  if (!router.isFallback && !tag?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, description, ogImage } = tag;

  const labels = {
    '[slug]': title,
  };

  return (
    <article>
      <SEO title={title} description={description} image={`${CMS_HOST}${ogImage}`} />
      <Container>
        <BreadCrumbs location={router} labels={labels} />
      </Container>
      <PageHeader title={title} excerpt={description} />
      <ArticleList articles={posts} />
    </article>
  );
}

Tag.propTypes = {
  tag: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ogImage: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      featuredImage: PropTypes.string,
      ogImage: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Tag.defaultProps = {
  posts: [],
};

export async function getStaticProps({ params }) {
  const tag = getTagBySlug(params.slug, ['title', 'description', 'ogImage', 'slug', 'content']);
  const posts = getPostsByTag(params.slug, [
    'title',
    'slug',
    'date',
    'excerpt',
    'featuredImage',
    'ogImage',
    'tags',
  ]);

  return {
    props: {
      tag,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags(['slug']);

  return {
    paths: tags.map((tag) => ({
      params: {
        slug: tag.slug,
      },
    })),
    fallback: false,
  };
}
