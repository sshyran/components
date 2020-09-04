import test from 'ava';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomTab from '..';
import fixtureDefault from './fixtures/default';

test('Atom › AtomTab › Default › should be rendered', renderComponentMacro, AtomTab, fixtureDefault);
