import React from 'react';
import Header from '../header/header';
import { shallow } from '../enzyme';


let component;
describe('<Header/>', () => {
  beforeEach(() => {
    component = shallow(<Header/>);
  });
  it('render Header component correctly', () => {   
    expect(component.exists()).toBe(true);
  });
  it('check header tag is defined', () => {
    expect(component.find('header')).toHaveLength(1);
  });
  it('check Title component is defined', () => {
    expect(component.find('Title')).toHaveLength(1);
  });
  it('check Search component is defined', () => {
    expect(component.find('Search')).toHaveLength(1);
  })
});
