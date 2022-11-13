import useProducts from '../../customHooks/useProducts';
import useCart from '../../customHooks/useCart';
import Product from '../Functional/Product';
import PageTitle from '../Shared/PageTitle';
import SideCart from '../Functional/SideCart';
import CommonTabs from './Items/CommonTabs';

const Menu = () => {

  const [products] = useProducts();
  const [cart, setCart, addToCart, menuStyle] = useCart(products);

  return (
    <section className="h-screen">
      <CommonTabs/>

    <div data-theme="luxury" style={menuStyle}> {/* Full Menu Container */}
      <PageTitle title="Menu"/>
      
      {/* Menu Items Container */}
      <div className="flex md:justify-evenly justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-10 md:gap-4">
          {
            products.map(product => 
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
      <div className="bg-teal-900">
        {
          <SideCart cart={cart} setCart={setCart}></SideCart>
        }
      </div>       
        
    </div>
    </section>   
  );
};

export default Menu;