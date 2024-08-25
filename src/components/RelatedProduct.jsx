import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  console.log({ related });
  useEffect(() => {
    if (products.length > 0) {
      console.log(products.length);
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(item => category === item.category);
      productsCopy = productsCopy.filter(
        item => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="mt-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'RELATED'} text2={'PRODUCT'}></Title>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map(item => (
          <ProductItem key={item._id} item={item}></ProductItem>
        ))}
      </div>
    </div>
  );
};

RelatedProduct.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
};

export default RelatedProduct;
