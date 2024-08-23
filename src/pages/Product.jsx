import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProduct = async () => {
    products.map(item => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*..................... product data................  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ..........................product image ................. */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex  sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={index}
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*.................. product information ...................... */}

        <div className="flex-1">
          <h2 className="text-2xl font-medium mt-2">{productData.name}</h2>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-3  my-8">
            <p className="font-medium">Select Your Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-orange-400' : ''
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white text-sm py-3 px-8 active:bg-gray-400">
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 flex flex-col gap-1 mt-4">
            <p>100% Original Product.</p>
            <p>Cash On Delivery On this Product.</p>
            <p>Easy Return & withing 7 days Exchange Policy.</p>
          </div>
        </div>
      </div>

      {/* .............description and reviews................  */}
      <div className="mt-20">
        <div className="flex gap-3">
          <b className="border px-5 py-3 tex-sm">Description</b>
          <p className="border px-5 py-3 tex-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-500 px-5 py-6 border">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nisi odit illum inventore neque ipsam iure fugiat dignissimos. Iste
            nemo dolorem, id soluta dolore ducimus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos voluptas, voluptate possimus eum ut?
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
