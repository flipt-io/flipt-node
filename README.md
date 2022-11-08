# Flipt Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/flipt)](https://www.npmjs.com/package/@fern-api/flipt)

## Documentation

API documentation is available at <https://www.flipt.io/docs>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-6l9jie?file=app.ts&view=editor)

```typescript
const client = new FliptApiClient({
  auth: {
    token: 'YOUR_TOKEN',
  },
});

const response = await client.flags.create({
  key: 'abc123',
  name: 'my-flag-name',
  description: 'add to cart button as bright blue',
  enabled: true,
});

console.log('Received response from Flipt!', response);
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-flipt/flipt-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
