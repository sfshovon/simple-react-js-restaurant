import React from 'react';
import useCart from '../../../customHooks/useCart';
import useProducts from '../../../customHooks/useProducts';
import Product from '../Product';
import SideCart from '../SideCart';
import CommonTabs from './CommonTabs';

const Seafood = () => {
  const [products] = useProducts();
  const [cart, setCart, addToCart, menuStyle] = useCart(products);
  const seafood= products.filter(product => product.category === "Seafood");

  return (
    <section className="h-screen">
      <CommonTabs/>
 
    <div data-theme="luxury" style={menuStyle}> {/* Full Menu Container */}
      {/* Menu Items Container */}
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-10 lg:gap-4">
          {seafood.map(product => 
              <Product 
                product={product} 
                addToCart={addToCart} 
                key={product.id}>
              </Product>
            )
          }
        </div>
      </div>

      {/* Order Review Container */}
      <div className="bg-teal-900 flex-col jus">
        {
          <SideCart cart={cart} setCart={setCart}></SideCart>
        }
      </div>       
        
    </div>
    </section>
  );
};

export default Seafood;