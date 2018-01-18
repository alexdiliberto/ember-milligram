'use strict';

const path = require('path');

module.exports = {
  name: 'ember-milligram',

  included() {
    this._super.included.apply(this, arguments);

    let app;

    // Use the  `_findHost()` method if available (in ember-cli >= 2.7.0)
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use the copied `_findHost()` implementation borrowed from ember-cli
      // https://github.com/ember-cli/ember-cli/blob/v2.15.1/lib/models/addon.js#L614-L625
      let current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    this.app = app;

    // https://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    app.options = app.options || {};
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

    // resolve the filename location of the dist `milligram.css`
    // https://nodejs.org/api/modules.html#modules_require_resolve
    let milligramCssFilePath = require.resolve('milligram');

    // return the milligram dist directory path
    // https://nodejs.org/api/path.html#path_path_dirname_path
    let milligramCssDir = path.dirname(milligramCssFilePath);

    // Include the compiled dist `.css` directory
    app.options.sassOptions.includePaths.push(milligramCssDir);
  }
};
