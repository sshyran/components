import {checker, createValidate} from '../../util/validation';
import createLink from '../link';
import AddClassBehaviour from '../../behaviour/effects/add-class';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    background: checker.color.optional,
    color: checker.color.optional,
    submitValue: checker.string,
    centered: checker.bool.optional,
    disabled: checker.bool.optional,
    href: checker.string.optional,
    target: checker.oneOf(['_self', '_blank', '_parent', '_top']).optional,
    onClick: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const HoverFill = HoverFillBehaviour(treant, options);
  const Link = createLink(treant, options);
  const AddClass = AddClassBehaviour(treant, options);

  const Button = (props, children) => {
    const {
      className,
      color,
      submitValue,
      centered,
      disabled,
      href,
      type = 'submit',
      target = '_blank',
      onClick
    } = props;

    const centeredStyle = centered && {
      margin: '0 auto',
      display: 'block'
    };

    let buttonContent;
    switch (type) {
      case 'link':
        buttonContent = (
          <Link href={href}>
            {submitValue}
          </Link>
        );
        break;

      case 'a':
        buttonContent = (
          <a
            href={href}
            target={target}
          >
            {submitValue}
          </a>
        );
        break;

      default:
        buttonContent = (
          <input
            type={type}
            value={submitValue}
            disabled={disabled}
            onClick={onClick}
            style={{
              color
            }}
          />
        );
    }

    return (
      <AddClass className={className}>
        <HoverFill>
          <div
            className={style.button}
            style={centeredStyle}
          >
            {buttonContent}
          </div>
        </HoverFill>
      </AddClass>
    );
  };

  Button.validate = createValidate(conditions);
  return Button;
};
