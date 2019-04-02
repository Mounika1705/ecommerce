import React from 'react';
import Title from './title';
import { shallow } from '../../enzyme';


let component;
describe('<Title/>', () => {
  beforeAll(() => {
    component = shallow(<Title />);
  });
  it('renders Title component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check h1 contains title', () => {
    expect(component.find('h1').text()).toContain('The Store');
  });
  it('check link to home', () => {
    expect(component.find('Link').prop('to')).toBe('/');
  });
});
