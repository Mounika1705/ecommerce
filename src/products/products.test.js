import React from 'react';
import Products from './products';
import { shallow } from '../../enzyme';


let component;
describe('<Products/>', () => {
  beforeAll(() => {
    component = shallow(<Products/>); 
  });
  it('render Products Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
