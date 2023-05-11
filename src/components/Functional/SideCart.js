import { useNavigate } from 'react-router-dom';
import sidePic1 from '../../assets/images/sidePic1.jpg';
import sidePic2 from '../../assets/images/sidePic2.jpg';
import sidePic3 from '../../assets/images/sidePic3.jpg';
import sidePic4 from '../../assets/images/sidePic4.jpg';
import sidePic5 from '../../assets/images/sidePic5.jpg';
import sidePic6 from '../../assets/images/sidePic6.jpg';
import sidePic7 from '../../assets/images/sidePic7.jpg';
import { deleteShoppingCart } from '../../utilities/localStorage';
import SideSlider from './SideSlider';

const sideSliderImages = [
  {
    img: sidePic1,
  },
  {
    img: sidePic2,
  },
  {
    img: sidePic3,
  },
  {
    img: sidePic4,
  },
  {
    img: sidePic5,
  },
  {
    img: sidePic6,
  },
  {
    img: sidePic7,
  } 
];



const SideCart = ({cart, setCart}) => {
  const navigate = useNavigate();
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
    <div className="sticky top-20 text-white">
      { 
        (quantity !== 0) && <h1 className="text-2xl text-center font-bold mx-5 mt-5 lg:text-3xl">Order List</h1>
      }
      {
        (quantity === 0) 
        ? <h1 className="text-2xl text-center font-bold mx-5 mt-5 animate-pulse lg:text-3xl">Please Add Items</h1>
        : <div>
            <div className="text-white">
              <h2 className="text-xl text-justify font-semibold mt-5 mb-2 px-4">Items Chosen: {quantity}</h2>
             
              <h3 className="text-lg text-justify font-semibold mb-2 px-4"> Subtotal: BDT {grandTotal.toFixed(2)}</h3>
            </div>

              <div className="flex justify-center items-center gap-5">
              {
                cart[0] && <button className="btn btn-success hover:bg-green-600 hover:text-white w-1/3" onClick={ () => navigate('/orders')}> Review Orders </button>
              }
              {
                cart[0] && <button className="btn btn-accent hover:bg-red-900 hover:text-white w-1/3"  onClick={ () => clearAll()}> Clear All </button>
              }
              </div> 
            </div>
      } 
      <div className="carousel w-full mt-10 opacity-50">
        <SideSlider sideSliderImages={sideSliderImages}/>
      </div>
    </div>
  );
};

export default SideCart;