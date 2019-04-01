import React from 'react';
import Navbar from '../navbar/navbar';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar/>', () => {
  it('render Navbar Component correctly', () => {
    const NavbarComponent = shallow(<Router><Navbar/></Router>);
    expect(NavbarComponent.exists()).toBe(true);
  });
  it('check Navbar Component has button', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find('button').prop('data-target')).toEqual('#navbarNav');
    NavbarComponent.unmount();
  });
  it('check Navbar Component has search input', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find("input[type='search']")).toHaveLength(1);
    NavbarComponent.unmount();
  });
  it('check Navbar Component has home link', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find('NavLink').at(0).prop('to')).toBe('/');
    NavbarComponent.unmount();
  });
  it('check Navbar Component has about link', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find('NavLink').at(1).prop('to')).toBe('/about');
    NavbarComponent.unmount();
  });
  it('check Navbar Component has products link', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find('NavLink').at(2).prop('to')).toBe('/products');
    NavbarComponent.unmount();
  });
  it('check Navbar Component has contact link', () => {
    const NavbarComponent = mount(<Router><Navbar/></Router>);
    expect(NavbarComponent.find('NavLink').at(3).prop('to')).toBe('/contact');
    NavbarComponent.unmount();
  });
});