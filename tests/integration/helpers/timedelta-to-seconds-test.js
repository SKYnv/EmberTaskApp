
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timedelta-to-seconds', 'helper:timedelta-to-seconds', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{timedelta-to-seconds inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

