# [Timer](https://shantanuraj.github.io/react-ts-starter/)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Sample app, to demo React + TypeScript usage.
Bonus: Redux + Redux-Observable

## Architecture

This project uses the [gitflow](https://github.com/nvie/gitflow) branching model.
See the [development](#development) section below for additional details.

- [master](https://github.com/shantanuraj/podcst-web/tree/master) is the production branch
- [develop](https://github.com/shantanuraj/podcst-web/tree/develop) is the active branch where commits are made

### Prerequisites

* [Node](https://nodejs.org/)   - node version 8+ for using latest ES2016+ featuers
* [yarn](https://yarnpkg.com/)  - package manager

### Getting the Source Code

Once the prerequisites are installed on your system, you can clone this repository with `git` and install the code dependencies using `yarn`.

```bash
git clone https://github.com/shantanuraj/react-ts-starter
yarn
```

## Development

The following steps are for building and installing from the source code. First compile the code to the `build` folder in the project directory.

```bash
# build:deb compiles to unoptimised dev friendly build
yarn build:dev

# build:prod and build:staging compile to optimised / minified production ready build
# build:staging is useful for using a different deployment path
yarn build:prod
```

or to compile in watch mode (automatically compile on file change)

```
yarn dev
```

Once the url reported by the webpack-dev-server

> **Note:** Code changes are hot-reloaded but *not* perfectly components render multiple times. You must click the `Reload (⌘R)` if you face any issues.

## Building

When you first clone this repository, you'll need to initialize gitflow by running: `git flow init -d` in the project root folder.

Now that your local environment is all setup, you can use the following procedure to contribute to this project.

  1. Run `git flow feature start <feature-name>`
  1. Implement your feature and commit the changes.
  1. Run `git flow feature finish <feature-name>`

Use the following process to cut a new release.

  1. run `git flow release start <semver>`
  1. bump the `package.json` version.
  1. run `yarn compile`
  1. run `git flow release finish <semver>`
  1. run `git push --follow-tags`
  1. zip the `build` folder and add it as a download to the release.

You'll find a great [tutorial on gitflow here](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) if you want to learn more about the details of how it works.

## Running Unit Tests

None yet but when they (hopefully exist)

```bash
yarn test
```

## Built With

* [TypeScript](https://www.typescriptlang.org/) - ***Much Nicer JavaScript***
* [Webpack 3](https://webpack.js.org/) - Bundling and transpiling TS to JS
* [Workbox](https://workboxjs.org/) - Automated PWA generation
* [Redux Observables](https://redux-observable.js.org/) - Sane tooling / philosophy to manage async redux actions
* [typestyle](https://typestyle.github.io/) - Type-checked CSS in JS

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for process details on
collaborating on this project.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions of this softare, see the ([releases on this repository](https://github.com/shantanuraj/podcst-web/releases)).

## Authors

See the list of [contributors][Contributor List] who participated in this project.

[Contributor List]:https://github.com/shantanuraj/podcst-web/contributors

## License

This project is licensed under the MIT License - see the
[LICENSE](LICENSE.md) file for details

## Acknowledgments

* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
