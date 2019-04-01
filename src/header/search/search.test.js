import React from 'react';
import Search from './search';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search/>', () => {
  it('render Search container correctly', () => {
    const SearchContainer = shallow(<Router><Search/></Router>);
    expect(SearchContainer.exists()).toBe(true);
  });
  it('check Search container profile link', () => {
    const SearchContainer = mount(<Router><Search/></Router>);
    expect(SearchContainer.find('Link').at(0).prop('to')).toBe('/profile');
    SearchContainer.unmount();
  });
  it('check Search container cart link', () => {
    const SearchContainer = mount(<Router><Search/></Router>);
    expect(SearchContainer.find('Link').at(1).prop('to')).toBe('/cart');
    SearchContainer.unmount();
  });
  it('check Search Container search input box', () => {
    const SearchContainer = mount(<Router><Search/></Router>);
    expect(SearchContainer.find("input[type='search']")).toHaveLength(1);
    SearchContainer.unmount();
  });
});