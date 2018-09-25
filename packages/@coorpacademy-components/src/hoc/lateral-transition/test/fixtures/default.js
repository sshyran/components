import React from 'react';
import SideNotificationComponent from '../../../../atom/side-notification';
import fixtures from '../../../../atom/side-notification/test/fixtures/default';

export default {
  props: {},
  children: <SideNotificationComponent {...fixtures.props} />
};
