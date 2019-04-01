import React from 'react';
import Header from '../header/header';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('./title/title');

describe('<Header/>', () => {
  beforeAll(() => {
    
  });
  it('render Header component correctly', () => {
    const HeaderComponent = shallow(<Router><Header/></Router>);
    expect(HeaderComponent.exists()).toBe(true);
    HeaderComponent.unmount();
  });
  it('check header tag is defined', () => {
    const HeaderComponent = mount(<Router><Header/></Router>);
    expect(HeaderComponent.find('header')).toHaveLength(1);
    HeaderComponent.unmount();
  });
  it('check Title component is defined', () => {
    const HeaderComponent = mount(<Router><Header/></Router>);
    expect(HeaderComponent.find('Title')).toHaveLength(1);
    HeaderComponent.unmount();
  });
  it('check Search component is defined', () => {
    const HeaderComponent = mount(<Router><Header/></Router>);
    expect(HeaderComponent.find('Search')).toHaveLength(1);
    HeaderComponent.unmount();
  })
});