import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/*---------------- left side ------------------- */}
      <div className="flex flex-col gap-4 w-full  sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}></Title>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          className="px-3.5 py-1.5 border border-gray- rounded w-full"
          placeholder="Email address"
        />{' '}
        <input
          type="text"
          className="px-3.5 py-1.5 border border-gray- rounded w-full"
          placeholder="Street "
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="Zip Code"
          />
          <input
            type="text"
            className="px-3.5 py-1.5 border border-gray- rounded w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="px-3.5 py-1.5 border border-gray- rounded w-full"
          placeholder="Phone Number"
        />
      </div>
      {/* -----------------Right side -------------------*/}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}></Title>
        </div>
        {/* ---------------payment selection --------- */}
        <div className=" flex flex-col gap-3 lg:flex-row">
          <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border">
            <p
              onClick={() => setMethod('stripe')}
              className={`min-w-3.5 h-3.5 border rounded-full ${
                method === 'stripe' ? 'bg-green-500' : ''
              }`}
            ></p>
            <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
          </div>
          <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border">
            <p
              onClick={() => setMethod('rozorpay')}
              className={`min-w-3.5 h-3.5 border rounded-full ${
                method === 'rozorpay' ? 'bg-green-500' : ''
              }`}
            ></p>
            <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
          </div>
          <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border">
            <p
              onClick={() => setMethod('cod')}
              className={`min-w-3.5 h-3.5 border rounded-full ${
                method === 'cod' ? 'bg-green-500' : ''
              }`}
            ></p>
            <p className="text-sm font-medium mx-4 text-gray-500">
              CASH ON DELIVERY
            </p>
          </div>
        </div>

        <div className="text-end mt-4 w-full">
          <button
            onClick={() => navigate('/orders')}
            className="px-8 py-2 text-white bg-black rounded-sm text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
