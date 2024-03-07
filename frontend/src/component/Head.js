import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/e-commerce.png';

import { BsCartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const Head = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      {/* desktop */}

      <div className='flex items-center h-full justify-between'>
        <Link to={''}>
          <div className='h-10'>
            <img src={logo} className='h-full' />
          </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
            <Link to={''}>Home</Link>
            <Link to={'menu/63f0fdbb3bcc2f97fa53d25d'}>Menu</Link>
          </nav>
          <div className='text-2xl text-slate-600 relative'>
            <Link to={'cart'}>
              <BsCartFill />
              <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center '>
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=' text-slate-600' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md'>
              {userData.image ? (
                <img src={userData.image} className='h-full w-full' />
              ) : (
                <Link
                  to={'newproduct'}
                  className='whitespace-nowrap cursor-pointer px-2'
                >
                  New product
                </Link>
              )}
            </div>
            {showMenu && (
              <div className='absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                <nav className='text-base md:text-lg flex flex-col md:hidden'>
                  <Link to={''} className='px-2 py-1'>
                    Home
                  </Link>
                  <Link
                    to={'menu/63f0fdbb3bcc2f97fa53d25d'}
                    className='px-2 py-1'
                  >
                    Menu
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Head;
