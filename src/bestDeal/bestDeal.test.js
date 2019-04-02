import React from 'react';
import BestDeal from './bestDeal';
import { shallow } from '../enzyme';


let component;
describe('<BestDeal/>', () => {
  beforeAll(() => {
    component = shallow(<BestDeal/>); 
  });
  it('render BestDeal Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
