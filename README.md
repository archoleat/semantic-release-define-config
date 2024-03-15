# Semantic Release Define Config

![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/codeql.yaml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/mocha.yaml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/semantic-release-define-config/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)

## Troubleshooting

If you are using **npm**, you may get a `peerDependency` error
that is related to these plugins:

-   `typescript-eslint/eslint-plugin`.
-   `typescript-eslint/parser`.

To fix this you can switch to **pnpm**(recommended) or install version `6.0.0`:

```shell
typescript-eslint/eslint-plugin@6.0.0
```

```shell
typescript-eslint/parser@6.0.0
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
