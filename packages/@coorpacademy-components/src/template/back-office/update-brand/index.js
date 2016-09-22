import {checker, createValidate} from '../../../util/validation';
import style from './style.css';

import createForm from '../../../organism/form';

const conditions = checker.shape({
  props: checker.shape({
    form: checker.object.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const UpdateBrand = (props, children) => {
    const Form = createForm(treant, options);

    const {form} = props;

    return (
      <div className={style.container}>
        <div className={style.header}>
          <h1 className={style.title}>
            {form.name}
          </h1>
        </div>
        <div className={style.card}>
          <Form form={form}/>
        </div>
      </div>
    );
  };

  UpdateBrand.validate = createValidate(conditions);
  return UpdateBrand;
};
