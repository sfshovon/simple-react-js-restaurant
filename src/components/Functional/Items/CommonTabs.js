import React from 'react';
import CustomLink from '../../Shared/CustomLink';

const CommonTabs = () => {
  return (
    <div data-theme="luxury" className="w-screen flex justify-center">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <CustomLink to="/all" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">All</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/appetizers" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Appetizers</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/soup" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Soup</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/ricenoodles" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Rice & Noodles</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/chicken" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Chicken</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/beef" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Beef</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/seafood" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Seafood</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/veggies" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Veggies</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/drinks" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Drinks</CustomLink>
            </li>
            <li className="mr-2">
              <CustomLink to="/desserts" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 ">Desserts</CustomLink>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default CommonTabs;