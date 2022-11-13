import React from 'react';
import dimsum from '../../assets/images/aboutDimsum.webp'
import foodPic from '../../assets/images/aboutRight.webp'
import title from '../../assets/images/panAsian.webp'
import about from '../../assets/images/about.jpg'
import PageTitle from '../Shared/PageTitle';

const About = () => {
  return (

    <div data-theme="luxury" className="py-10">
      <PageTitle title="About"/>

      <div className="grid grid-cols-1 justify-center items-center mx-8 md:px-64">
        <img className="mx-auto w-1/2" src={title} alt="" />
        <h3 className="mt-2 text-2xl text-center text-yellow-200 italic">A modern take on Chinese tea houses </h3>
        <p className="text-lg text-center font-light text-yellow-100 md:px-32 mt-3">We serve a wide array of dim sum - ranging from traditional to our own unique recipes. If you're looking for more than just dim sum & tea, we have a full-course, Asian fusion menu designed to take your taste buds the extra mile.</p>
      </div>
      
      <div className="grid grid-cols-1 justify-center items-center gap-3 mt-2 md:flex">

        <div>
          <img className="rounded-lg h-96 w-96" src={about} alt="" />
        </div>

        <div>
          <img className="rounded-lg h-96 w-96" src={dimsum} alt="" />
        </div>

        <div className="h-96 w-96 border-double rounded-lg border-4 border-lime-200 font-bold text-blue-500 p-2 my-2 opacity-80">
          <h5 className="text-2xl text-yellow-200 mb-3">THE DYNASTY OF</h5>
          <img className="h-48 w-42" src={foodPic} alt="" />
          <p className="text-lg text-justify font-light text-yellow-100 mt-3">          If you are one for adventure, our secret recipes will take your dim sum experience to a whole new level.</p>
        </div>

      </div>
      
    </div>
      
  );
};

export default About;