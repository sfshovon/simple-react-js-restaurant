import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';

const Delivery = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <section data-theme="luxury" className="h-screen">
      <div className="flex justify-center">
      <PageTitle title="Delivery Address"/>
        <div data-theme="autumn" className="w-4/5 md:w-1/2 flex-col rounded-2xl shadow-lg p-5 items-center my-10">
        <h2 className="font-bold text-2xl text-center">Delivery Address</h2>
        <h3 className="font-bold text-center my-2">Please fill up the delivery details</h3>
        <form onSubmit={ () => navigate('/thankyou')} className="flex flex-col gap-4">
          <input className="p-2 mt-5 rounded-xl border" type="text" name="name" placeholder={user.displayName} readOnly />
          <input className="p-2 rounded-xl border" type="email" name="email" placeholder={user.email} readOnly required />
          <input className="p-2 rounded-xl border" type="text" name="address" placeholder="Address" required/>
          <input className="p-2 rounded-xl border" type="number" name="number" placeholder="Phone Number" required/>
          <button type="submit" className="btn btn-primary rounded-xl py-2 hover:scale-105 duration-300">Place Order</button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Delivery;