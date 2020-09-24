import { InputTextarea } from "../..";

const props: InputTextarea = {
  title: 'Name',
  placeholder: 'Your text',
  value: 'Foo foo foo',
  onChange: value => console.log(value)
};

export default {
  props
};
