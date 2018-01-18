import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | milligram import styles', function(hooks) {
  setupApplicationTest(hooks);

  test('milligram styles are imported', async function(assert) {
    await visit('/');

    // https://github.com/milligram/milligram/blob/v1.3.0/dist/milligram.css#L45
    let btn = this.element.querySelector('#buttons a.button');
    let btnBackgroundColor = window
      .getComputedStyle(btn)
      .getPropertyValue('background-color')

    // http://rgb.to/hex/9b4dca
    assert.equal(btnBackgroundColor, 'rgb(155, 77, 202)');
  });
});
