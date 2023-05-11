import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../utilities/localStorage';


const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product=> product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const productExists = cart.find(cartProduct => cartProduct.id === selectedProduct.id);
    if(!productExists){
      selectedProduct.quantity = 1;
      newCart = [...cart,selectedProduct];
    }
    else{
      const remaining = cart.filter(cartProduct => cartProduct.id !== selectedProduct.id)
      productExists.quantity = productExists.quantity + 1;
      newCart = [...remaining,productExists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
  };
  const menuStyle = {
    display: "grid",
    gridTemplateColumns: "5fr 1fr"
  }
  return [cart, setCart, addToCart, menuStyle];
};

export default useCart;