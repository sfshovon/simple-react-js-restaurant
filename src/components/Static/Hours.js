import React from 'react';
import PageTitle from '../Shared/PageTitle';

const Hours = () => {
  return (
      <div data-theme="luxury" className="py-20">
        <PageTitle title="Hours"/>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-zinc-900 border-double border-4 border-lime-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h1 className="text-4xl font-bold text-justify text-yellow-200 mb-2 spacing-x-5 tracking-widest"> Gulshan Trading Hours </h1>
              <h3 className="text-3xl my-3">Sat-Thu <span className="font-light text-yelow-100"> - 12:00 to 23:00 </span></h3>
              <h3 className="text-3xl my-3">Fri <span className="font-light text-yelow-100"> - 14:00 to 23:00 </span></h3>
              <h2 className="text-3xl text-justify text-warning mb-2 spacing-x-1 tracking-wide mt-3"> Kitchen Closes - 22:30 </h2>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-lime-200 pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-lime-100 shadow"
              ></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-lime-200 pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-lime-100 shadow"
              ></div>
            </div>
            <div
              className="bg-zinc-900 border-double border-4 border-lime-100  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
            >
              <h1 className="text-4xl font-bold text-justify text-yellow-200 mb-2 spacing-x-5 tracking-widest"> Dhanmondi Trading Hours </h1>
              <h3 className="text-3xl my-3">Sat-Thu <span className="font-light text-yelow-100"> - 12:00 to 22:00 </span></h3>
              <h3 className="text-3xl my-3">Fri <span className="font-light text-yelow-100"> - 14:00 to 22:00 </span></h3>
              <h2 className="text-3xl text-justify text-warning mb-2 spacing-x-1 tracking-wide mt-3"> Kitchen Closes - 21:00 </h2>
            </div>
          </div>
         
        </div>
      </div>
  );
};

export default Hours;