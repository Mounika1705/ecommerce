import React from 'react';
import Title from './title';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title/>', () => {
  it('renders Title component correctly', () => {
    const TitleComponent = shallow(<Router><Title/></Router>);
    expect(TitleComponent.exists()).toBe(true);
  });
  it('check h1 contains title', () => {
    const TitleComponent = mount(<Router><Title/></Router>);
    expect(TitleComponent.find('h1').text()).toContain('The Store');
    TitleComponent.unmount();
  });
  it('check link to home', () => {
    const TitleComponent = mount(<Router><Title/></Router>);
    expect(TitleComponent.find('Link').prop('to')).toBe('/');
    TitleComponent.unmount();
  });
});
