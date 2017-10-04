/* eslint-env node */
'use strict';

const path = require('path');

module.exports = {
  name: 'ember-milligram',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);

    var target = parentAddon || app;

    // allow addon to be nested - see: https://github.com/ember-cli/ember-cli/issues/3718
    if (target.app) {
      target = target.app;
    }

    // see: http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    target.options = target.options || {};
    target.options.sassOptions = target.options.sassOptions || {};
    target.options.sassOptions.includePaths = target.options.sassOptions.includePaths || [];

    // Build path to Milligram `.sass` source directory
    // `milligram.sass` is the base export file
    // So, in our App's app.scss we import via: `@import "milligram"`
    var milligramSassPath = path.join(target.project.root, 'node_modules', 'milligram', 'src');

    // Import `.sass` dependencies
    target.options.sassOptions.includePaths.push(milligramSassPath);
  }
};
