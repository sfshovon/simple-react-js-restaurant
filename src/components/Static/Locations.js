import React from 'react';
import locationBackground from '../../assets/images/location.jpg'
import PageTitle from '../Shared/PageTitle';

const Locations = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center md:flex gap-5 pb-10" style={{ backgroundImage: `url(${locationBackground})`}}>
      <PageTitle title="Loations"/>
      <div className="md:mx-10 mt-32 opacity-80 mx-auto md:ml-36">
        <iframe width="375" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=Yum%20Cha%20District%20Gulshan&t=&z=13&ie=UTF8&iwloc=&output=embed" title="YCD"></iframe>
      </div>

      <div data-theme="dracula" className="md:w-1/3 grid grid-cols-1 items-center md:mt-36 bg-zinc-900 opacity-80">
       <h1 className="text-3xl font-bold text-justify text-yellow-200 mx-10 my-2"> Locations </h1>

        <div className="grid grid-cols-1 items-center text-white mx-10 my-5 py-5">
          <h2 className="text-2xl font-bol tracking-widest mt-2"> Gulshan </h2>
          <h3 className="text-xl tracking-wide mt-2"> Plot 60A, Road 131, Gulshan, Dhaka 1212 </h3>
          <h3 className="text-lg tracking-wide mt-2"> Contact: 01756-785722 </h3>
        </div>
        <div className="grid grid-cols-1 items-center text-white mx-10 my-5 py-5">
          <h2 className="text-2xl font-bol tracking-widest mt-2"> Dhanmondi </h2>
          <h3 className="text-xl tracking-wide mt-2"> Level 4, Gawsia Twin Peak, 9/A Satmasjid Road, Dhanmondi, Dhaka 1209 </h3>
          <h3 className="text-lg tracking-wide mt-2"> Contact: 01756-785722 </h3>
        </div>

      </div>
    </div>
  );
};

export default Locations;