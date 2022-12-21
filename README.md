# Flipt Node Library

![npm](https://img.shields.io/npm/v/@flipt-io/flipt?label=%40flipt-io%2Fflipt)

## Documentation

API documentation is available at <https://www.flipt.io/docs/reference/overview>.

## Install

```
npm i @flipt-io/flipt
```

## Usage

```typescript
const client = new FliptApiClient({
  environment: Environment.Production,
  auth: {
    credentials: {
      username: "YOUR_USERNAME",
      password: "YOUR_PASSWORD",
    },
  },
});

const response = await client.flags.create({
  key: "abc123",
  name: "my-flag-name",
  description: "add to cart button as bright blue",
  enabled: true,
});

console.log("Received response from Flipt!", response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/flipt-io/flipt-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
