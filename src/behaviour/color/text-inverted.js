import createBehaviour from '../../util/behaviour';

const textInverted = (engine, skin) => props => {
  const properties = {
    style: {
      color: props.value || skin && skin.texts.inverted
    }
  };

  return properties;
};

export default createBehaviour(textInverted);
