import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import style from './select-box.css';

const conditions = checker.shape({
  props: checker.shape({
    list: checker.array,
    theme: checker.oneOf(['default', 'plain']).optional,
    onChange: checker.func
  }),
  children: checker.none
});

const spanInline = (theme, skin) => {
  const color = {
    plain: get('theme.lock', skin),
    default: get('texts.inverted', skin)
  };

  return {
    borderColor: color[theme]
  };
};

const selectInline = (theme, skin) => {
  const inline = {
    plain: {
      color: get('texts.normal', skin),
      backgroundColor: get('backgrounds.input', skin)
    },
    default: {}
  };

  return inline[theme];
};

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin} = options;
  const code = getOr('', 'icons.select', skin);
  const iconCode = String.fromCharCode(code);

  const SelectBox = (props, children) => {
    const {list, onChange, theme = 'default'} = props;

    const selectOptions = list.map(item => (
      <option
        className={style.option}
        value={item.value}
        selected={item.selected}
      >
        {item.name}
      </option>
    ));

    return (
      <span
        className={style[theme]}
        style={spanInline(theme, skin)}
        attributes={{
          'data-icon': iconCode
        }}
      >
        <select
          onChange={onChange}
          style={selectInline(theme, skin)}
        >
          {selectOptions}
        </select>
      </span>
    );
  };

  SelectBox.validate = createValidate(conditions);
  return SelectBox;
};
