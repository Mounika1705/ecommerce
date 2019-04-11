import React from 'react';
import { Copyright } from './copyright';
import { shallow } from '../../enzyme';


let component;
describe('<Copyright/>', () => {
  beforeAll(() => {
    component = shallow(<Copyright/>); 
  });
  it('render Copyright Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check top element works correctly', () => {
    expect(component.find('a').at(0).prop('href')).toBe('#top');
  });
  it('check copyright text', () => {
    expect(component.find('.text-center').text()).toContain('@ 2019 Gadget Store');
  });
});