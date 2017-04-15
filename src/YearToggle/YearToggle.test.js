import React from 'react';
import { shallow } from 'enzyme';
import YearToggle from './YearToggle';

describe('YearToggle', () => {
  const testString = '2016';
  const wrapper = shallow(<YearToggle>{testString}</YearToggle>);
  // it('should render a button', () => {
  //   expect(wrapper.find('button')).to.have.length(1);
  // });
  // it('should render with class base', () => {
  //   expect(wrapper.props().className).to.contain('base');
  // });
  // it('should have the appropriate child text', () => {
  //   expect(wrapper.text()).to.eql(testString);
  // });
});
