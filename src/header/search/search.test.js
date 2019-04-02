import React from 'react';
import Search from './search';
import { shallow } from '../../enzyme';


let component;
describe('<Search/>', () => {
  beforeAll(() => {
    component = shallow(<Search />);
  });
  it('render Search container correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check Search container profile link', () => {
    expect(component.find('Link').at(0).prop('to')).toBe('/profile');
  });
  it('check Search container cart link', () => {
    expect(component.find('Link').at(1).prop('to')).toBe('/cart');
  });
  it('check Search Container search input box', () => {
    expect(component.find("input[type='search']")).toHaveLength(1);
  });
});
