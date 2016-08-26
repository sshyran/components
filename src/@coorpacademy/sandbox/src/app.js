import createProductCursus from '../../components/template/app-catalog/product-cursus';
import createProductCourse from '../../components/template/app-catalog/product-course';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

import fixture from '../../components/template/app-catalog/product-cursus/test/fixtures/default';
import fixture2 from '../../components/template/app-catalog/product-course/test/fixtures/default';

const translate = createTranslate(locales.fr);
const selected = 1;

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const ProductCursus = createProductCursus(treant);
  const ProductCourse = createProductCourse(treant);

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <ProductCursus {...fixture.props} />
      <ProductCourse {...fixture2.props} />
    </div>
  );
};
