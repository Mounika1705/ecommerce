import React from 'react';
import Footer from './footer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer/>', () => {
  it('render Footer Component correctly', () => {
    const FooterComponent = shallow(<Router><Footer/></Router>);
    expect(FooterComponent.exists()).toBe(true);
  });
});