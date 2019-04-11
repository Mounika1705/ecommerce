import React from 'react';
import BestDeal from './bestDeal';
import { shallow } from '../enzyme';
import { products } from '../data/data';


let component, useContextMock;
describe('<BestDeal/>', () => {
  beforeAll(() => {
    component = shallow(<BestDeal/>); 
    useContextMock = React.useContext = jest.fn();
  });
  it('render BestDeal Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check BestDeal direct link works correctly', () => {
    expect(component.find('a').at(0).prop('href')).toBe('/');
    expect(component.find('a').at(0).text()).toContain('Shop Now');
  });
  it('check button is present', () => {
    expect(component.find('button').text()).toBe('Hot Deal');
  });
  it('check context works correctly', () => {
    useContextMock.mockReturnValue(products);
    expect(component.props.children).toBe(products);
  });
});
