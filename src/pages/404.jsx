import React from 'react';
import { Heading, Paragraph } from 'grommet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h2">NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Layout>
);

export default NotFoundPage;
