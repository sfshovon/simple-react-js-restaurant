import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth';
import Orders from './components/Functional/Orders';
import Navbar from './components/Shared/Navbar';
import Home from './components/Static/Home';
import Menu from './components/Functional/Menu';
import Locations from './components/Static/Locations';
import Hours from './components/Static/Hours';
import About from './components/Static/About';
import Login from './components/Auth/Login';
import ForgetPassword from './components/Auth/ForgetPassword';
import Register from './components/Auth/Register';
import Cart from './components/Functional/Cart';
import NotFound from './components/Static/NotFound';
import ThankYou from './components/Static/ThankYou';
import Delivery from './components/Functional/Delivery';
import All from './components/Functional/Items/All';
import Appetizers from './components/Functional/Items/Appetizers';
import Soup from './components/Functional/Items/Soup';
import RiceNoodles from './components/Functional/Items/RiceNoodles';
import Chicken from './components/Functional/Items/Chicken';
import Beef from './components/Functional/Items/Beef';
import Seafood from './components/Functional/Items/Seafood';
import Veggies from './components/Functional/Items/Veggies';
import Drinks from './components/Functional/Items/Drinks';
import Desserts from './components/Functional/Items/Desserts';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/menu" element={<Menu/>} ></Route>
      <Route path="/all" element={<All/>} ></Route>
      <Route path="/appetizers" element={<Appetizers/>} ></Route>
      <Route path="/soup" element={<Soup/>} ></Route>
      <Route path="/ricenoodles" element={<RiceNoodles/>} ></Route>
      <Route path="/chicken" element={<Chicken/>} ></Route>
      <Route path="/beef" element={<Beef/>} ></Route>
      <Route path="/seafood" element={<Seafood/>} ></Route>
      <Route path="/veggies" element={<Veggies/>} ></Route>
      <Route path="/drinks" element={<Drinks/>} ></Route>
      <Route path="/desserts" element={<Desserts/>} ></Route>
      <Route path="/orders" element={<RequireAuth> <Orders/> </RequireAuth>}> </Route>
      <Route path="/locations" element={<Locations/>} ></Route>
      <Route path="/hours" element={<Hours/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/forgetPassword" element={<ForgetPassword/>} ></Route>
      <Route path="/register" element={<Register/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
      <Route path="/delivery" element={<RequireAuth> <Delivery/> </RequireAuth>} ></Route>
      <Route path="/thankyou" element={<ThankYou/>} ></Route>
      <Route path="*" element={<NotFound/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
