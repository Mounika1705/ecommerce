import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Tab from './tab';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

/*
jest.mock('./Tab', () => {
    const ProductProvider = require.requireActual('./Tab').ProductProvider;
    const context = require.requireActual('../context/__mocks__/contextProvider');
    
    return {
      ProductProvider,
      ProductConsumer: (props) => props.children({context})
    }
  });
*/
const ProductConsumer= (props) => props.children({"item": [
    {"id": 1},
    {"id": 2},
    {"id": 3}]});

it('check component', () => {
    const component = mount(<Tab>item</Tab>);
    expect(component.find('ProductConsumer').dive().find('Product').length).toEqual(3);
    component.unmount();
})