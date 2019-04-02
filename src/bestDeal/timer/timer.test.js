import React from 'react';
import Timer from './timer';
import { shallow } from '../enzyme';


let component;
describe('<Timer/>', () => {
  beforeAll(() => {
    component = shallow(<Timer/>); 
  });
  it('render Timer Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
