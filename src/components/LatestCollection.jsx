import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="my-10">
      <div className="text-center text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'}></Title>
      </div>
    </div>
  );
};

export default LatestCollection;
