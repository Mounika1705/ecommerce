import React, { Component } from 'react';
import Product from '../../../product/product';


export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage : 6,
      currentPage : 1,
      prev : true,
      next : false
    }
  }
  product_list = null;
  shuffle = (list) => {
    let i = 0, j = 0, temp = null;
    for (i = list.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = list[i]
      list[i] = list[j]
      list[j] = temp
    }
    return list;
  }
  getAllProducts = (products) => {
    let productList = [];
    for (const product_type in products) {
      for (const product of products[product_type]) {
        productList.push(product);
      }
    }
    productList = this.shuffle(productList);
    this.product_list = productList;
    return productList;
  }
  pageItems = (page) => {
    let currentPage = this.state.currentPage;
    if (page === 'prev') {
      currentPage -= 1;
    } else if (page === 'next') {
      currentPage += 1;
    } else {
      currentPage = page;
    }
    const prev = (currentPage === 1) ? true : false;
    const next = (currentPage === Math.ceil(
      this.product_list.length / this.state.itemsPerPage)) ? true : false;
    this.setState({
      currentPage, prev, next
    });
  }
  render() {
    this.getAllProducts(this.props.products);
    return (
      <div className="product-container">
        <div className="row filter d-flex">
          <h5>Showing Results: Page {this.state.currentPage}</h5>
          <select >
            <option defaultValue="default">Default sorting</option>
            <option value="popularity">Sort By Popularity</option>
            <option value="newness">Sort By Newness</option>
            <option value="sort_asc">Sort By Price: low to high</option>
            <option value="sort_desc">Sort By Price: high to low</option>
          </select>
        </div>
        <div className="row d-flex p-4">
          {
            this.product_list.slice(this.state.itemsPerPage * (this.state.currentPage - 1),
              this.state.itemsPerPage * this.state.currentPage).map(product => {
              return (
                <Product className="m-1" key={product.model} product={product} />
              );
            })
          }
        </div>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${this.state.prev ? 'disabled' : null}`}>
            <button className="page-link" onClick={this.pageItems.bind(null, 'prev')}>Previous</button>
          </li>
          {
            [...Array(Math.ceil(this.product_list.length / this.state.itemsPerPage)).keys()].map(page => {
              return (<li key={page} 
                className={`page-item ${this.state.currentPage == page + 1 && 'active'}`}>
                <button className="page-link" onClick={this.pageItems.bind(null, page + 1)}>
                {page + 1}</button>
              </li>);
            })
          }
          <li className={`page-item ${this.state.next ? 'disabled' : null}`}>
            <button className="page-link" onClick={this.pageItems.bind(null, 'next')}>Next</button>
          </li>
        </ul>
      </div>
    )
  }
}
