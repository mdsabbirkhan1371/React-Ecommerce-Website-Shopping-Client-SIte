import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'}></Title>
        <p className="w-3/4 mb-5 lg:mb-10 m-auto text-xs sm:text-sm  md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam
          alias necessitatibus reprehenderit!
        </p>
      </div>

      {/* render product  */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map(item => (
          <ProductItem item={item} key={item._id}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
