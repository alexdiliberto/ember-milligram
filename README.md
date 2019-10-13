[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# DEPRECATED

You probably don't need this addon. If you want to use the Milligram CSS framework in your Ember app, simply install the dependency (`yarn add -D milligram`) then add the following line to your [`ember-cli-build.js` file](https://guides.emberjs.com/release/addons-and-dependencies/#toc_css):

```js
app.import('node_modules/milligram/dist/milligram.css');
```

Now Milligram will be compiled into your final `/dist/vendor.css` asset

<hr>

<h1 align="center">
  <img width="232px" height="335px" src="https://cdn.rawgit.com/alexdiliberto/ember-milligram/master/tests/dummy/public/img/logo.svg" alt="Milligram Logo">
  <br>
  <a href="https://alexdiliberto.com/ember-milligram">ember-milligram</a>
  <br>
</h1>

<p align="center">
  <a href="http://emberobserver.com/addons/ember-transformicons">
    <img src="http://emberobserver.com/badges/ember-transformicons.svg"
      alt="Ember Observer Score">
  </a>
  <a href="https://travis-ci.org/alexdiliberto/ember-milligram">
    <img src="https://travis-ci.org/alexdiliberto/ember-milligram.svg?branch=master"
      alt="Build status">
  </a>
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"
      alt="Commitizen friendly">
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/alexdiliberto/ember-transformicons.svg"
      alt="Greenkeeper Badge">
  </a>
</p>

<h3 align="center">
  A minimalist CSS framework for Ember
</h3>

## Installation

```sh
ember install ember-milligram
```

This will install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) as a dependency and create a file `<app-name>/app/styles/app.scss` with the following import statement:

```scss
@import "milligram";
```

Please note that [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) is currently required to use this addon.

## Development

### Deploy

```sh
# Runs test suite, bumps version, pushes tags, publishes, updates CHANGELOG.md
yarn run deploy

# Publish a new copy the dummy app to gh-pages
ember deploy production
```

## License

MIT Copyright (c) [Alex DiLiberto](https://alexdiliberto.com/)

[Milligram](http://milligram.io/) was designed with ♥ by [CJ Patoilo](http://cjpatoilo.com/). Licensed under the [MIT License](https://github.com/milligram/milligram/blob/master/license).
