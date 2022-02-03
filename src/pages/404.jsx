import React from 'react';
import PageHeader from '@components/molecules/PageHeader';
import PageSection from '@components/atoms/PageSection';
import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <PageHeader title="404: Not found" />
      <PageSection>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </PageSection>
    </Layout>
  );
}

export default NotFoundPage;
