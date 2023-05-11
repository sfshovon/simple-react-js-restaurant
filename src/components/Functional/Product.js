import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({product, addToCart}) => {
  const {pic, title, price, proportion, category} = product;
  return (
    <section>
    <div data-theme="halloween" className="card card-compact w-48 bg-base-200 mb-3 lg:w-72 md:w-64 bg-transparent">
      <figure>
        <img src={pic} className="md:h-64 md:w-64" alt="Product"/>
      </figure>
      <div className="card-body text-justify">
        <h2 className="card-title h-12 font-bold">{title}</h2>
        <div className="mt-5">
          <h3 className="text-lg font-semibold h-20">{proportion}</h3>
          <h3 className="text-lg font-semibold h-8 w-screen">Category: {category} </h3>
          <h3 className="text-lg font-semibold">Price: BDT {price}</h3>
        </div>
        <button className="text-lg items-center footer btn btn-primary bottom-0 mt-5 mx-auto" onClick={ () => addToCart(product)}>Order Item 
          <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>       
        </button> 
      </div>
    </div>
    </section>
  );
};

export default Product;