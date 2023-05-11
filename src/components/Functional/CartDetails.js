import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartDetails = ({cartInfo, removeItem}) => {
  return (
    <tr>
      <td className="w-full px-5 py-5 border-b text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-14 h-14">
            <img className="w-full h-full rounded-full" src={cartInfo.pic} alt="Food"/>
          </div>
          <div className="ml-3">
            <p className="text-xl font-bold whitespace-no-wrap"> {cartInfo.title} </p>
            <p className="text-lg font-semibold whitespace-no-wrap">{cartInfo.proportion}</p>
          </div>
        </div>
      </td>
      <td className="w-full px-5 py-5 border-b font-bold">
        <p className="text-2xl whitespace-no-wrap">{cartInfo.price}</p>
        <p className="text-xl whitespace-no-wrap">BDT</p>
      </td>
      <td className="w-full px-5 py-5 border-b font-semibold">
        <p className="text-2xl whitespace-no-wrap">{cartInfo.quantity}</p>
      </td>
      <td className="w-full px-5 py-5 border-b text-sm">
        <button onClick={ () => removeItem(cartInfo.id)} type="button" className="inline-block btn-sm bg-red-700 text-white px-2 py-1 rounded-full">
          <FontAwesomeIcon className="hover:text-zinc-900" icon={faTrash}/>     
        </button>
      </td>
    </tr>
  );
};

export default CartDetails;