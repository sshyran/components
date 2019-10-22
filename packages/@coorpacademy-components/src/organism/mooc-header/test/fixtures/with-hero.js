import defaultsDeep from 'lodash/fp/defaultsDeep';
import withHeroSliderFixtures from '../../../mooc/image-slider/test/fixtures/with-hero';
import Default from './default';

const {card} = withHeroSliderFixtures.props;
const {props} = Default;

export default {
  props: defaultsDeep(props, {
    slider: {
      card
    }
  })
};