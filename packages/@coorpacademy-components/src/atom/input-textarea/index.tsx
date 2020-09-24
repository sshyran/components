import React, {useMemo} from 'react';
import {noop} from 'lodash/fp';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.module.css';


const themeStyle = {
  setup: style.setup,
  cockpit: style.cockpit,
  default: style.default
} as const;

export type InputTextarea = {
  placeholder: string;
  title: string;
  required?: boolean;
  name?: string;
  theme?: keyof typeof themeStyle;
  disabled?: boolean;
  value: string;
  error?: string;
  onChange?: (...args: any[]) => void;
  description?: string;
  modified?: boolean;
};

const InputTextarea = (props: InputTextarea) => {
  const {
    title: propsTitle,
    name,
    placeholder,
    value,
    theme = 'default',
    onChange = noop,
    error,
    required,
    description,
    disabled,
    modified = false
  } = props;

  const title = `${propsTitle}${required ? '* ' : ' '}`;
  const mainClass = themeStyle[theme];
  const className = getClassState(style.default, style.modified, style.error, modified, !!error);
  const handleChange = useMemo(() => (e: any) => onChange(e.target.value), [onChange]);

  return (
    <div className={classnames(mainClass, className)}>
      <label>
        <span className={style.title}>{title}</span>
        <textarea
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          onInput={handleChange}
          disabled={disabled}
          style={{
            resize: 'none'
          }}
        />
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default InputTextarea;
