import React, { Component } from 'react';
import { products } from '../data/data';


const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {...products}
    }
  }
  render() {
    return (
      <ProductContext.Provider value={this.state.products}>
        {this.props.children }
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductContext};
