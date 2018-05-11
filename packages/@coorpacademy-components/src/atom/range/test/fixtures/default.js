export default {
  props: {
    value: [0, 0.5, 1],   
    multi: false,
    onChange: (...args) => console.log('onChange', ...args)
  }
};
