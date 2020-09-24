import { TabProps } from "../..";

const props: TabProps = {
  onClick: function onTabClick() {},
  title: 'Title',
  targetContent: 'tab',
  links: [
    {
      title: 'Freemium title'
    },
    {
      title: 'Premium title'
    }
  ]
};

export default {
  props
};
