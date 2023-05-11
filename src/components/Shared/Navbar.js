import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [menu, setMenu] = useState(false);

  return (
    <nav data-theme="wireframe" className="w-full bg-zinc-900 text-white shadow-lg sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center justify-between gap-3">
              <img src={logo} className="h-6 w-6" alt="Logo" />
              <h2 className="text-lg font-bold uppercase">Yum Cha District</h2>
            </div>
              
            
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setMenu(!menu)}
              >
                {
                  menu
                  ? (<i className="fa-solid fa-xmark text-white h-6 w-6 flex justify-center items-center"></i>) 
                  : (<i className="fa-solid fa-bars text-white h-6 w-6 flex justify-center items-center"></i>)
                }
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${menu ? "block" : "hidden"}`}> {/* Menu For Mobile Devices */}
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="md:ml-4">
                <CustomLink to="/" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l rounded-full p-2"> 
                <span className="hover:text-green-300"> Home </span> 
                </CustomLink>
              </li>
              <li className="md:ml-4">
                <CustomLink to="/menu" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg rounded-full p-2"> 
                  <span className="hover:text-green-300"> Menu </span> 
                </CustomLink>
              </li>
              {
                user ?
                <li className="md:ml-4">
                <CustomLink to="/orders" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg rounded-full p-2"> 
                  <span className="hover:text-green-300"> Orders </span> 
                </CustomLink>
                </li>
                :
                ""
              }
              <li className="md:ml-4">
                <CustomLink to="/locations" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg rounded-full p-2"> 
                  <span className="hover:text-green-300"> Locations </span> 
                </CustomLink>
              </li>
              <li className="md:ml-4">
                <CustomLink to="/hours" className="no-underlin font-bold md:border-none md:mx-5 md:p-0 md:text-lg rounded-full p-2"> 
                  <span className="hover:text-green-300"> Hours </span> 
                </CustomLink>
              </li>
              <li className="md:ml-4">
                <CustomLink to="/about" className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg rounded-full p-2"> 
                  <span className="hover:text-green-300"> About </span> 
                </CustomLink>
              </li>
              {
                user && user.emailVerified
              ? 
              <li className="md:ml-4">
                <CustomLink onClick={handleSignOut} className="flex items-center justify-center gap-3 btn btn-accent bg-cyan-900 no-underline font-bold rounded-full"> 
                  <i className="fa-solid fa-user"></i>
                  <span className="hover:text-green-300"> Signout </span> 
                </CustomLink>
              </li>
                :
              <li className="md:ml-4">
                <CustomLink to="/login" className="flex items-center justify-center gap-3 btn btn-accent bg-cyan-900 no-underline font-bold rounded-full"> 
                  <i className="fa-solid fa-user"></i>
                  <span className="hover:text-green-300"> Login </span> 
                </CustomLink>
              </li>
              }            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;