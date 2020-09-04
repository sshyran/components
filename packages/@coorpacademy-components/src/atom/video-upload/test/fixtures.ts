import test from 'ava';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomVideoUpload from '..';
import fixtureDesktop from './fixtures/desktop';
import fixtureLoading from './fixtures/loading';
import fixtureModified from './fixtures/modified';
import fixtureNoPreview from './fixtures/no-preview';
import fixtureWithoutVideo from './fixtures/without-video';

test('Atom › AtomVideoUpload › Desktop › should be rendered', renderComponentMacro, AtomVideoUpload, fixtureDesktop);
test('Atom › AtomVideoUpload › Loading › should be rendered', renderComponentMacro, AtomVideoUpload, fixtureLoading);
test('Atom › AtomVideoUpload › Modified › should be rendered', renderComponentMacro, AtomVideoUpload, fixtureModified);
test('Atom › AtomVideoUpload › NoPreview › should be rendered', renderComponentMacro, AtomVideoUpload, fixtureNoPreview);
test('Atom › AtomVideoUpload › WithoutVideo › should be rendered', renderComponentMacro, AtomVideoUpload, fixtureWithoutVideo);
