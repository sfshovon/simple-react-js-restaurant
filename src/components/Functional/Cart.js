import { useNavigate } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/localStorage';
import CartDetails from '../Functional/CartDetails';

const Cart = ({cart, setCart}) => {
  const navigate = useNavigate();
  const removeItem = (removeProduct) =>{
    const remaining = cart.filter(cartProduct => cartProduct.id !== removeProduct);
    removeFromDb(removeProduct);
    setCart(remaining);
  }
  const clearAll = () => {
    deleteShoppingCart()
    setCart([]);
  }
  let total = 0;
  let quantity = 0;

  for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  
  const vat = (total * 0.05);
  const grandTotal = (total + vat);

  return (
    <section className="h-screen">
    <div data-theme="luxury" className="text-white">
      { 
        (quantity !== 0) && <h1 className="text-2xl text-center font-bold mx-5 mb-2 lg:text-3xl">Review Your Orders</h1>
      }
      {
        (quantity === 0) 
        ? <h1 className="text-2xl text-center font-bold mx-5 mb-5 animate-pulse lg:text-3xl">Please Add Items From Menu</h1>
        : 
        <div>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table data-theme="retro"  className="w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-center text-lg font-semibold uppercase tracking-wider"> Items Chosen </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Total Price</th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Vat </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Subtotal </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Clear All </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Proceed Checkout </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-full px-5 py-5 border-b font-bold">
                      <p className="text-2xl text-center whitespace-no-wrap">{quantity}</p>
                    </td>
                    <td className="w-full px-5 py-5 border-b font-semibold">
                      <p className="text-2xl whitespace-no-wrap">{total.toFixed(2)}</p>
                    </td>
                    <td className="w-full px-5 py-5 border-b font-semibold">
                      <p className="text-2xl whitespace-no-wrap">{vat.toFixed(2)}</p>
                    </td>
                    <td className="w-full px-5 py-5 border-b font-semibold">
                      <p className="text-2xl whitespace-no-wrap">BDT {grandTotal.toFixed(2)}</p>
                    </td>
                    <td className="w-full px-5 py-5 border-b text-sm">
                      {
                          cart[0] && <button className="btn btn-error text-white rounded-l"  onClick={ () => clearAll()}> Clear All </button>
                      }
                    </td>
                    <td className="w-full px-5 py-5 border-b text-sm">
                      {
                          cart[0] && <button className="btn btn-success text-white rounded-lg" onClick={ () => navigate('/delivery')}> Proceed Checkout </button>
                      }
                    </td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table data-theme="retro"  className="w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Item Description </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Price </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Quantity </th>
                    <th className="px-5 py-3 border-b-2 text-left text-lg font-semibold uppercase tracking-wider"> Remove Item </th>
                  </tr>
                </thead>
                <tbody>
                      {
                        cart.map(cartInfo => 
                          <CartDetails 
                            cartInfo = {cartInfo} 
                            key = {cartInfo.id}
                            removeItem = {removeItem}>
                          </CartDetails>
                        )
                      }
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    </section>
  );
};

export default Cart;