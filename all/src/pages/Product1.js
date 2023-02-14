//ซูเปอร์มาร์เก็ต

import React, {useContext} from 'react';
//import product context
import {ProductContext} from '../contexts/ProductContext';
import Product from '../components/Product';


const Product2 = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  const filteresProducts = products.filter(item => {
    return (
        item.category === "ซูเปอร์มาร์เก็ต"
    );
  });
  console.log(filteresProducts);
  return <div>
    
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 xl:grid-col-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0'>
          {filteresProducts.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Product2;
