import React from 'react';
import Product from './product';
import { shallow } from '../../enzyme';


let component;
describe('<Product/>', () => {
  beforeAll(() => {
    component = shallow(<Product/>); 
  });
  it('render Product Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
