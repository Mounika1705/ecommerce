import React from 'react';
import { ProductContext } from '../../context/context';
import Product from '../../product/product';


export default () => {
  const value = React.useContext(ProductContext);
  return (<div className="row">
    <div className="col-lg-3 col-md-12 col-sm-12">
      <Product product={value['mobiles'][0]} />
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
      <Product product={value['laptops'][0]} />
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
      <Product product={value['tablets'][0]} />
    </div>
    <div className="col-lg-3 col-md-12 col-sm-12">
      <Product product={value['wearables'][0]} />
    </div>
  </div>);
}
