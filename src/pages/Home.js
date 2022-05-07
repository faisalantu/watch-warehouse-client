import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import plant from "../assets/plant.png";
import clock from "../assets/clock.png";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product/limited");
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <div className='flex'>
        <div className="mt-24 lg:w-9/12 ">
          <div className='flex flex-wrap gap-10 justify-center md:justify-center lg:justify-center'>
            {products.map((product) => {
              return (
                <div key={product._id}>
                  <ProductCard data={product} />
                </div>
              );
            })}
          </div>
          <div className='px-4 py-3 text-center sm:px-6 mt-5'>
            <Link
              to={"/allproduct"}
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              Manage Inventory
            </Link>
          </div>
        </div>
        <div className='w-3/12 relative hidden lg:block'>
          <img
            style={{ right: "20%", top: "20%" }}
            className='absolute w-52'
            src={clock}
            alt='plant'
          />
          <img className='absolute bottom-0' src={plant} alt='plant' />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
