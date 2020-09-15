import test from 'ava';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomTitle from '..';
import fixtureFixture from './fixtures/fixture';

test('Atom › AtomTitle › Fixture › should be rendered', renderComponentMacro, AtomTitle, fixtureFixture);
