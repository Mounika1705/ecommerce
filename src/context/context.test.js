import React from 'react';
import ProductProvider from './context';
import { shallow } from '../enzyme';


let component;
describe('<ProductProvider/>', () => {
  beforeAll(() => {
    component = shallow(<ProductProvider/>); 
  });
  it('render Context Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
