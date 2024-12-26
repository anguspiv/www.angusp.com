import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://b1a4275bc45a0d3b2084b83b4f2bec7e@o1080632.ingest.us.sentry.io/4508520712699904',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
