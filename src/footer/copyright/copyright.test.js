import React from 'react';
import Copyright from './copyright';
import { shallow } from '../enzyme';


let component;
describe('<Copyright/>', () => {
  beforeAll(() => {
    component = shallow(<Copyright/>); 
  });
  it('render Copyright Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});