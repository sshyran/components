import test from 'ava';
import forEach from 'lodash/forEach';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomTitle from '..';
import fixtureFixture from './fixtures/fixture';

test('Atom › AtomTitle > should have valid propTypes', t => {
  t.pass();
  forEach(AtomTitle.propTypes, (value, key) => {
    t.not(value, undefined, `PropType for "Atom.AtomTitle.propTypes.${key}" may not be undefined. Did you mistype the propTypes definition?`);
  });
});

test('Atom › AtomTitle › Fixture › should be rendered', renderComponentMacro, AtomTitle, fixtureFixture);
