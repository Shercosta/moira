# Moira Technology Asia

Website for Moira Technology Asia.

## Development

```bash
npm install
npm run dev
```

No environment variables are required.

## Build

Before pushing to `master`, make sure the production build succeeds:

```bash
npm run build
```

This ensures there are no build errors that could fail the Netlify deployment.

## Deployment

The `master` branch is automatically deployed to:

[https://moiratech.netlify.app](https://moiratech.netlify.app?utm_source=chatgpt.com)

Push to `master` only after verifying the build passes.
