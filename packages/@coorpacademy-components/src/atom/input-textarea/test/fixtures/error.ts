import { InputTextarea } from "../..";

const props: InputTextarea = {
  title: 'Name',
  placeholder: 'Your text',
  value: '',
  error: "Error's message",
  onChange: value => console.log(value)
};

export default {
  props
};
