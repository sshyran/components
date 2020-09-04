import test from 'ava';
import forEach from 'lodash/forEach';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomTabContent from '..';
import fixtureDefault from './fixtures/default';
import fixtureHideContentBackground from './fixtures/hide-content-background';

test('Atom › AtomTabContent > should have valid propTypes', t => {
  t.pass();
  forEach(AtomTabContent.propTypes, (value, key) => {
    t.not(value, undefined, `PropType for "Atom.AtomTabContent.propTypes.${key}" may not be undefined. Did you mistype the propTypes definition?`);
  });
});

test('Atom › AtomTabContent › Default › should be rendered', renderComponentMacro, AtomTabContent, fixtureDefault);
test('Atom › AtomTabContent › HideContentBackground › should be rendered', renderComponentMacro, AtomTabContent, fixtureHideContentBackground);
