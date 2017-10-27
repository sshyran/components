import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import DashboardPreview from '..';

import defaultFixture from './fixtures/selected';

test('should call the onUpdateVersion function with the value of the target', t => {
  t.plan(2);

  const selector = 'li[data-name="version-field"] select';
  const onChange = value => {
    t.is(value, 'foo');
  };

  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onUpdateVersion={onChange} />);

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'foo'
    }
  });
});

test('should not crash if the onUpdateVersion function has not been specified', t => {
  t.plan(1);
  const selector = 'li[data-name="version-field"] select';
  const wrapper = mount(<DashboardPreview {...defaultFixture.props} onUpdateVersion={undefined} />);

  t.true(wrapper.find(selector).exists());

  wrapper.find(selector).simulate('change', {
    target: {
      value: 'foo'
    }
  });
});