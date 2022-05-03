import React from "react";
import bannerImg from "../assets/banner_v3.png";
const Banner = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center pt-12 text-gray-800'>
      <div className='md:w-6/12 flex items-center justify-center flex-col'>
        <div className="mt-10 md:mt-0">
          <h1 className='text-3xl sm:text-5xl font-semibold text-center md:text-left'>
            Your <span className='text-green-500'> Time</span>
          </h1>
          <h1 className='text-3xl sm:text-5xl font-semibold text-center md:text-left'>In Your Hand</h1>
          <p>Manage your time and watch with ease with our storage management system </p>
        </div>
      </div>

      <div className='md:w-6/12'>
        <img src={bannerImg} alt='humns' />
      </div>
    </div>
  );
};

export default Banner;
