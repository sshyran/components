import test from 'ava';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomSpinner from '..';
import fixtureDefault from './fixtures/default';

test('Atom › AtomSpinner › Default › should be rendered', renderComponentMacro, AtomSpinner, fixtureDefault);
