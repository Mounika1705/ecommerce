import React from 'react';
import Tab from './tab';
import { shallow } from '../../enzyme';


let component;
describe('<Tab/>', () => {
  beforeAll(() => {
    component = shallow(<Tab/>); 
  });
  it('render Tab Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
