import React from 'react';
import Footer from './footer';
import { shallow } from '../enzyme';


let component;
describe('<Footer/>', () => {
  beforeAll(() => {
    component = shallow(<Footer/>); 
  });
  it('render Footer Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
});
