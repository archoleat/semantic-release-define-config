# Semantic Release Define Config

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fsemantic-release-define-config)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fsemantic-release-define-config)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

Provide a defineConfig function for Semantic Release.

## Installation

```shell
bun i -D @archoleat/semantic-release-define-config
```

## Usage

See [Semantic Release Configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration#options).

Add the following code to the `release.config.js` file:

```js
import { defineConfig } from '@archoleat/semantic-release-define-config';

export default defineConfig({})
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
