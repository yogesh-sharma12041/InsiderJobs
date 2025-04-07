// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://c03b26449d4c86b0eaa9cc7f7450caf5@o4509071764619264.ingest.us.sentry.io/4509071768682496",
  integrations: [
    Sentry.mongooseIntegration()
  ],
  // Set sampling rate for profiling - this is evaluated only once per SDK.init
  profileSessionSampleRate: 1.0,
});