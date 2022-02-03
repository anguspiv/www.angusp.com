import React from 'react';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import FeaturedArticle from '@components/organisms/FeaturedArticle';

function Articles() {
  return (
    <Layout>
      <SEO title="Articles - Angus Perkerson" />
      <PageHeader title="Articles" />
      <PageSection>
        <FeaturedArticle />
      </PageSection>
    </Layout>
  );
}

Articles.propTypes = {};

Articles.defaultProps = {};

export default Articles;
