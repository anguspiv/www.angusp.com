import { PageHeader } from '@components/molecules/PageHeader';
import { Container } from '@components/atoms/Container';
import { SEO } from '@components/organisms/SEO';

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <PageHeader title="404: Not found" />
      <Container>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </>
  );
}

export default NotFoundPage;
