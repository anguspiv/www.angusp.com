let siteHost = 'http://localhost:3000';

const CONTEXT = process.env.CONTEXT || 'dev';

switch (CONTEXT) {
  case 'production':
    siteHost = process.env.URL;
    break;
  case 'deploy-preview':
    siteHost = process.env.DEPLOY_PRIME_URL;
    break;
  case 'branch-deploy':
    siteHost = process.env.DEPLOY_PRIME_URL;
    break;
  default:
    siteHost = process.env.URL || 'http://localhost:3000';
}

export const CMS_HOST = siteHost;
export const SITE_HOST = siteHost;

export default {
  CMS_HOST,
  SITE_HOST,
};
