import React from 'react';
import LatestProducts from './latestProducts';
import { shallow } from '../../enzyme';


let component;
describe('<LatestProducts/>', () => {
  beforeAll(() => {
    component = shallow(<LatestProducts/>); 
  });
  it('render LatestProducts Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
