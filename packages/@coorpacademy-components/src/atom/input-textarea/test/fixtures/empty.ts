import { InputTextarea } from "../..";

const props: InputTextarea = {
  title: 'Name',
  placeholder: 'Your text',
  value: '',
  onChange: value => console.log(value)
};

export default {
  props
};
