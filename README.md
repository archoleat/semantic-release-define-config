# Archoleat Repo Template

![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/codeql.yaml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/mocha.yaml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/repo-template/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Getting Started](#getting-started)
-   [Features](#features)
-   [Scripts](#scripts)
-   [Workflows](#workflows)
-   [Prettier](#prettier)
-   [Commitlint, ESM and TypeScript](#commitlint-esm-and-typescript)
-   [Change of Maintainer](#change-of-maintainer)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)

**Archoleat Repo Template** is a template repository designed for quickly
starting new projects with pre-configured tools and best development practices.
This template includes ready-made solutions for integration with:

-   **Git**.
-   **GitHub**.
-   **Commitizen**.
-   **Commitlint**.
-   **Conventional Commits**.
-   **Husky & Lint Staged**.
-   **GitHub Actions**.
-   **Semantic Release**.
-   **PNPM**.
-   **CodeQL**.
-   **EditorConfig**.
-   **ESLint**.
-   **Remark**.
-   **Prettier**.
-   **Mocha**.
-   **TypeScript**.
-   **Dependabot**.

> \[!TIP]
> **A good solution for your business!**
>
> Now you don't have to worry about unnecessary costs.
> Everything is already set up and prepared for you!
>
> And also the template is very good for teams,
> because you can easily standardize projects with this template.

## Getting Started

1.  **Create a Repository**: Use this template
    to create a new repository on GitHub.

    > Since this is a **Public Template** you can click the button
    > **Use this template** for a faster and more convenient cloning.

1.  **Clone the Repository**: Clone your new repository to your local machine.

1.  **Start Development**: Develop your project,
    making changes according to your project's needs.

1.  **Configure GitHub Actions**: Modify GitHub Actions
    settings to fit your requirements.

    > **For those unfamiliar with GitHub Actions**,
    > our workflows use
    > [**chain**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run),
    > if you want to add more workflows to this chain,
    > workflows, it won't work, because the chain only supports
    > only three levels, example: `workflow A` > `workflow B` >
    > `workflow C` > `workflow D`, if you add `workflow E`
    > to the chain. it won't work!

## Features

-   **Flexibility**: Easily customizable template to adapt
    to different project types.

-   **Git and GitHub Integration**: Pre-configured `.gitignore`, `.gitmodules`
    and `.gitattributes` for efficient work with Git and GitHub.

    -   **Conventional Commits, Commitlint & Commitizen**: If you don't want
        to think about how to write a commit every time,
        these plugins will help you.

        > It will be especially useful for teams that
        > have an ongoing debate about writing commits.

    -   **Husky & Lint Staged**: Won't let you submit
        bad code to the repository!

-   **Continuous Integration (CI)**: Built-in CI support using GitHub Actions
    for automatic linting, testing and building of your code with each change.

    > Also suitable for private repositories! GitHub Actions use
    > **cache**, **timeout-minutes**, **path filters** and **workflow run**
    > to reduce the execution time, which means it will significantly
    > reduce your costs!

    -   **Security**: Included **CodeQL** workflow for detecting
        and preventing potential vulnerabilities in your code.

    -   **Linters**: Help you maintain a consistent code writing style
        and find errors.

        > By default **ESLint**, **Prettier**, **Editorconfig Checker** and
        > **Remark** check all files in the project, if you want to change this
        > behavior then go to [`package.json`](package.json)
        > and [`lint-staged.config.js`](lint-staged.config.js)
        > files.

    -   **Tests**: Automated testing will help you focus on
        writing better code!

    -   **Semantic Release**: For those who are tired of writing changelogs
        and thinking about what the next version number will be.

-   **TypeScript**: Pre-configured **TypeScript** setup
    for improved reliability and development convenience.

-   **Bots**:

    -   **Dependabot**: No more wasting time updating dependencies!

## Scripts

-   `init`: Installs dependencies, **Husky** and update submodules.

-   `release`: Runs **Semantic Release**.

-   `test`: Runs **Mocha** and the tests in the **specs/** folder.

    > Also runs using the [`mocha.yaml`](.github/workflows/mocha.yaml)
    > workflow.

-   `lint:editorconfig`: Runs **Editorconfig Checker** and
    checks all files in the project.

    > Also runs with the [`editorconfig.yaml`](.github/workflows/editorconfig.yaml)
    > workflow.

-   `lint:formatting`: Runs **Prettier** with the `--check` flag
    for all files.

    > In the [`prettier.yaml`](.github/workflows/prettier.yaml)
    >
    > Also run with a `pre-commit` hook.

-   `lint:md`: Runs **Remark** with the `--quiet` flag and
    checks all **Markdown** files.

    > Also runs with the [`markdown.yaml`](.github/workflows/markdown.yaml)
    > workflow.

-   `lint:ts`: Runs **ESLint** with the flag `--fix`
    for all **TypeScript** files.

    > Runs with the [`eslint.yaml`](.github/workflows/eslint.yaml)
    > workflow.
    >
    > Also run with a `pre-commit` hook.

-   `prettify`: Runs **Prettier** with the `--write` flag
    for all files.

-   `commit`: Runs **Commitlint** to create commits according to
    **Conventional Commits** standards.

## Workflows

-   [`codeql.yaml`](.github/workflows/codeql.yaml):
    Checks **TypeScript** for vulnerabilities.

-   [`commitlint.yaml`](.github/workflows/commitlint.yaml):
    Checks the commit message according to the **conventionalcommits** standard.

-   [`create-pull-request.yaml`](.github/workflows/create-pull-request.yaml):
    Automatically creates a **Pull Request**
    when pushing a branch to the repository.

-   [`dependabot-auto-merge-pull-request.yaml`](.github/workflows/dependabot-auto-merge-pull-request.yaml):
    Automatically merges dependabot **Pull Requests** to the **main** branch.

-   [`editorconfig.yaml`](.github/workflows/editorconfig.yaml):
    Checks all files with **editorconfig-checker**.

-   [`eslint.yaml`](.github/workflows/eslint.yaml):
    Checks all **TypeScript** files with **ESLint**.

-   [`markdown.yaml`](.github/workflows/markdown.yaml):
    Checks all Markdown files with **remark**.

-   [`mocha.yaml`](.github/workflows/mocha.yaml):
    Tests all TypeScript files with **Mocha**.

-   [`pre-commit.yaml`](.github/workflows/pre-commit.yaml):
    Runs a check on the contents of the **Pull Request** before merging.

-   [`prettier.yaml`](.github/workflows/prettier.yaml):
    Checks all files with **Prettier**.

-   [`release.yaml`](.github/workflows/release.yaml): Creates release.

-   [`semantic-pull-request.yaml`](.github/workflows/semantic-pull-request-title.yaml):
    Validates the **Pull Request** title
    against the **conventional commits** standard.

-   [`stale.yaml`](.github/workflows/stale.yaml):
    Removes issues that have not been active for more than 60 days.

## Prettier

> \[!WARNING]
> You need to install the **Prettier** extension for it to work.
>
> You can see all necessary extensions for **Visual Studio Code** in
> [**.vscode**](https://github.com/archoleat/.vscode/extensions.json).

> \[!TIP]
> If you want to change the rules in `prettier.config.js` you can do it
> in `.editorconfig`, prettier will automatically pick up the rules
> from editorconfig.

> \[!NOTE]
> All **Markdown** and **.\*ignore** files [**ignored**](.prettierignore).

## Commitlint, ESM and TypeScript

In order for `commitlint.config.ts` to work correctly together
with the **CI/CD** pipeline, the following code has been added:

```json
// package.json
"exports": {
  "./*": "./commitlint.config.ts"
},
```

```json
// tsconfig.json
{
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

## Change of Maintainer

The following files use the name **nikkeyl** by default:

-   [`CODEOWNERS`](.github/CODEOWNERS).
-   [`package.json`](package.json).

Before using this template, replace this name with your
name, name of your team or the name of your organization.

> \[!CAUTION]
> Don't forget to change your license!

## Troubleshooting

If you are using **npm** you may get an error related to these plugins:

-   `typescript-eslint/eslint-plugin`.
-   `typescript-eslint/parser`.

To fix this you can switch to **pnpm**(recommended) or install version `6.0.0`.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).