import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { visit, find } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | milligram import styles');

test('milligram styles are imported', async function(assert) {
  await visit('/');

  // https://github.com/milligram/milligram/blob/v1.3.0/dist/milligram.css#L45
  let btn = find('#buttons a.button');
  let btnBackgroundColor = window
    .getComputedStyle(btn)
    .getPropertyValue('background-color')

  // http://rgb.to/hex/9b4dca
  assert.equal(btnBackgroundColor, 'rgb(155, 77, 202)');
});
