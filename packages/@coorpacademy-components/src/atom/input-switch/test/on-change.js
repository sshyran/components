import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import InputSwitch from '..';
import defaultFixture from './fixtures/checked';

test('should call the onChange function with the checked value of the target', t => {
  t.plan(2);
  const expectedOnChangeValues = [false, true];
  const onChange = value => {
    t.is(value, expectedOnChangeValues.shift());
  };
  const wrapper = shallow(<InputSwitch {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('input').simulate('change', {target: {checked: false}});
  wrapper.find('input').simulate('change', {target: {checked: true}});
});
