import React from 'react';

import Layout from '@components/templates/Layout';
import SEO from '@components/organisms/SEO';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;
