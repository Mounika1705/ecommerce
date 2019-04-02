import React from 'react';
import { ProductContext } from '../../context/context';
import Product from '../../product/product';
import styled from 'styled-components';


export default (props) => {
  const value = React.useContext(ProductContext);
  return (
    <div className="row">
        {
          value[props.children].map(product => {
            return (product.id < 4 &&
              <Div className="col-lg-4 col-md-12 col-sm-12 p-0 text-center" key={product.id}>
                <Product product={product} />
              </Div>);
          })
        }
    </div>
  )
}

const Div = styled.div`
  .card {
    border: none;
  }
`