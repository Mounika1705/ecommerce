import React from 'react';
import Home from './home';
import { shallow } from '../enzyme';


let component;
describe('<Home/>', () => {
  beforeAll(() => {
    component = shallow(<Home/>); 
  });
  it('render Home Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
