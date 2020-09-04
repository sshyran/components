import test from 'ava';
import renderComponentMacro from '../../../test/helpers/render-component';
import AtomSocialLink from '..';
import fixtureFacebookFooter from './fixtures/facebook-footer';
import fixtureFacebook from './fixtures/facebook';
import fixtureTwitter from './fixtures/twitter';

test('Atom › AtomSocialLink › FacebookFooter › should be rendered', renderComponentMacro, AtomSocialLink, fixtureFacebookFooter);
test('Atom › AtomSocialLink › Facebook › should be rendered', renderComponentMacro, AtomSocialLink, fixtureFacebook);
test('Atom › AtomSocialLink › Twitter › should be rendered', renderComponentMacro, AtomSocialLink, fixtureTwitter);
