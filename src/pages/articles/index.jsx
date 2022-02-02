import React from 'react';
import Layout from '../../components/templates/Layout';
import SEO from '../../components/organisms/SEO/SEO';
import PageHeader from '../../components/molecules/PageHeader';

function Articles() {
  return (
    <Layout>
      <SEO title="Articles - Angus Perkerson" />
      <PageHeader title="Articles" />
    </Layout>
  );
}

Articles.propTypes = {};

Articles.defaultProps = {};

export default Articles;
