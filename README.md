# Flipt Node Library

[![npm](https://img.shields.io/npm/v/@flipt-io/flipt?label=%40flipt-io%2Fflipt)](https://www.npmjs.com/package/@flipt-io/flipt)
![status](https://img.shields.io/badge/status-hardening-orange)

## Documentation

API documentation is available at <https://www.flipt.io/docs/reference/overview>.

## Status

This SDK is considered in 'hardening' status. We will try to minimize breaking changes, however there still may be breaking changes between versions without a major version update.

We recommend pinning the package version to a specific version in your `package.json` file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.


## Breaking Changes

Version [0.2.2](https://github.com/flipt-io/flipt-node/releases/tag/0.2.2) of this client introduced a breaking change as it requires the passing of `namespace` parameter to all methods that require it. This is to support the new namespace functionality added to [Flipt v1.20.0](https://www.flipt.io/docs/reference/overview#v1-20-0).

:warning: If you are running an older version of Flipt server (< [v1.20.0](https://github.com/flipt-io/flipt/releases/tag/v1.20.0)), you should use a pre 0.2.2 version of this client.

## Install

```
npm i @flipt-io/flipt@{version}
```

## Usage

```typescript
import { FliptApiClient } from '@flipt-io/flipt';
import { DEFAULT_NAMESPACE } from '@flipt-io/flipt/constants';
import { v4 as uuidv4 } from 'uuid';

const client = new FliptApiClient({
  environment: "http://localhost:8080",
  auth: {
    credentials: {
      username: "YOUR_USERNAME",
      password: "YOUR_PASSWORD",
    },
  },
});

const response = await client.evaluate.evaluate(DEFAULT_NAMESPACE, {
  flagKey: "abc123",
  entityId: uuidv4(),
  context: {},
});

console.log("Received response from Flipt!", response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/flipt-io/flipt-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
