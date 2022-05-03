import React from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import plant from "../assets/plant.png"
import clock from "../assets/clock.png"

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="flex">
        <div className='flex flex-wrap gap-10 mt-24 lg:w-8/12 justify-center lg:justify-end'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="w-4/12 relative hidden lg:block">
          <img style={{right:"20%", top:"20%"}} className="absolute w-52" src={clock} alt="plant" />
          <img className="absolute bottom-0" src={plant} alt="plant" />
        </div>
      </div>
    </div>
  );
};

export default Home;
