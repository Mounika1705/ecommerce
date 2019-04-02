import React from 'react';
import About from './about';
import { shallow } from '../enzyme';


let component;
describe('<About/>', () => {
  beforeAll(() => {
    component = shallow(<About/>); 
  });
  it('render About Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
