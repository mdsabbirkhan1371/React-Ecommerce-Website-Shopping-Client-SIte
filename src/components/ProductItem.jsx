import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProductItem = ({ item }) => {
  console.log({ item });
  const { name, price, _id, image } = item;
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${_id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image && image[0] ? image[0] : 'default-image-url.jpg'}
          alt=""
        />
      </div>
      <p className="pb-1 pt-3 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
};
export default ProductItem;
