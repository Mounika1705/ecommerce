import React from 'react';
import Contact from './contact';
import { shallow } from '../enzyme';


let component;
describe('<Contact/>', () => {
  beforeAll(() => {
    component = shallow(<Contact/>); 
  });
  it('render Correct Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
