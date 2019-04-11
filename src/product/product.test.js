import React from 'react';
import Product from './product';
import { shallow, mount } from '../enzyme';
import { Testdata } from '../data/testdata';
import checkPropTypes from 'check-prop-types';


let component, stub;
describe('<Product/>', () => {
  beforeAll(() => {
    component = shallow(<Product product={Testdata}/>); 
  });
  it('render Product Component correctly', () => {
    expect(component.exists()).toBe(true);
  });
  it('check prop types works properly', () => {
    const expected = {};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain("The prop `product` is marked as required");
  });
  it('check prop types model works properly', () => {
    const expected = {product: {
      model: 12,
    }};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain(" expected `string`");
  });
  it('check prop types image works properly', () => {
    const expected = {product: {
      image: 1
    }};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain("expected `string`");
  });
  it('check prop types price works properly', () => {
    const expected = {product: {
      price: '12'
    }};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain(" expected `number`");
  });
  it('check prop types discount works properly', () => {
    const expected = {product: {
      discount: '12'
    }};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain(" expected `number`");
  });
  it('check prop types cart works properly', () => {
    const expected = {product: {
      cart: 1
    }};
    const consoleErr = checkPropTypes(Product.propTypes, expected, 'prop', Product.name);
    expect(consoleErr).toContain(" expected `boolean`");
  });
  it('check model name renders properly', () => {
    expect(component.find('.card-title').text()).toBe('modelName');
  });
  it('check image has correct source path', () => {
    expect(component.find('.card-img-top').at(0).prop('src')).toBe('image.jpg');
  });
  it('check discount shown properly', () => {
    expect(component.find('.top-left').text()).toContain(19);
  });
  it('check price shown is correct', () => { 
    expect(component.find('.card-text').text()).toEqual('$64$51.84');
  });
  it('check cart prop works properly', () => { 
    expect(component.find('button').text()).toBe("Add To Cart");
  });
  it('check in cart prop works properly', () => { 
    component.setProps({product : {cart: true}});
    expect(component.find('button').text()).toBe("InCart");
  });
  it('check discount not available', () => { 
    component.setProps({product : {discount: 0, price: 45}});
    expect(component.find('.card-text').text()).toEqual('$45');
    expect(component.find('.top-left')).toHaveLength(0);
  });
  it('checks discountPrice function', () => {
    expect(component.instance().discountPrice(100, 10)).toEqual('90.00');
  });
  
});
