import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between py-5 font-medium items-center">
      <img src={assets.logo} alt="" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={'/'} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={'/collection'}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={'/about'} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img className="w-5 cursor-pointer" src={assets.search_icon} alt="" />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block  hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-36 gap-2 py-3  px-5 bg-slate-100 text-gray-500 ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={'/cart'} className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-3 leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:hidden cursor-pointer  "
          alt=""
        />
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-3 gap-4 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border pl-2"
            to={'/'}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border pl-2"
            to={'/collection'}
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border pl-2"
            to={'/about'}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border pl-2"
            to={'/contact'}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
