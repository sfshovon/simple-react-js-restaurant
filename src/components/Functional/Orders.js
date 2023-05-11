import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useCart from '../../customHooks/useCart';
import useProducts from '../../customHooks/useProducts';
import auth from '../../firebase.init';
import Cart from '../Functional/Cart';
import PageTitle from '../Shared/PageTitle';

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const [user] = useAuthState(auth);

  return (
    <div data-theme="luxury" className="h-screen">
      <h1 className="text-3xl text-center pt-3 font-bold">Welcome to Yum Cha District</h1>
      <h1 className="text-2xl text-center my-2">- {user.displayName}</h1>
      <PageTitle title="Orders"/>
      <div data-theme="luxury">
      {
        <Cart cart={cart} setCart={setCart}>
        
        </Cart>
      }
      </div>
    </div>
  );
};

export default Orders;