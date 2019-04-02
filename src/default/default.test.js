import React from 'react';
import Default from './default';
import { shallow } from '../enzyme';


let component;
describe('<Default/>', () => {
  beforeAll(() => {
    component = shallow(<Default/>); 
  });
  it('render BestDeal Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
