import React from 'react';
import Navbar from '../navbar/navbar';
import { shallow } from '../enzyme';


let component;
describe('<Navbar/>', () => {
  beforeAll(() => {
    component = shallow(<Navbar />);
  });
  it('render Navbar Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check Navbar Component has button', () => {
    expect(component.find('button').prop('data-target')).toEqual('#navbarNav');
  });
  it('check Navbar Component has search input', () => {
    expect(component.find("input[type='search']")).toHaveLength(1);
  });
  it('check Navbar Component has home link', () => {
    expect(component.find('NavLink').at(0).prop('to')).toBe('/');
  });
  it('check Navbar Component has about link', () => {
    expect(component.find('NavLink').at(1).prop('to')).toBe('/about');
  });
  it('check Navbar Component has products link', () => {
    expect(component.find('NavLink').at(2).prop('to')).toBe('/products');
  });
  it('check Navbar Component has contact link', () => {
    expect(component.find('NavLink').at(3).prop('to')).toBe('/contact');
  });
});