/* eslint-env node */
module.exports = {
  description: 'Installs NPM dependencies for ember-milligram',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'milligram', target: '~1.3.0' },
      { name: 'ember-cli-sass', target: '^7.0.0' }
    ]);
  }
};
