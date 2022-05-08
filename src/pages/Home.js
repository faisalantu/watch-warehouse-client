import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import plant from "../assets/plant.png";
import clock from "../assets/clock.png";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";
import fastImg from "../assets/fast.svg";
import potrait1 from "../assets/potrait1.jpg";
import potrait2 from "../assets/potrait2.jpeg";
import potrait3 from "../assets/Portrait3.webp";
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
        <div className='mt-24 lg:w-9/12 '>
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
      <div className='border-t-2 border-gray-100 w-9/12 mx-auto h-1 my-10'></div>
      <div className='flex flex-col-reverse md:flex-row items-center pt-12 text-gray-800 mt-5'>
        <div className='md:w-6/12'>
          <img className='w-6/12 mx-auto' src={fastImg} alt='humns' />
        </div>
        <div className='md:w-6/12 flex items-center justify-center flex-col mb-6 md:mb-0'>
          <div className='mt-10 md:mt-0 text-center md:text-left'>
            <h1 className='text-3xl sm:text-5xl font-semibold '>
              We are <span className='text-green-500'> Fast</span>
            </h1>
            <h1 className='text-3xl sm:text-5xl font-semibold '>
              And <span className='text-green-500'> Secure</span>
            </h1>
            <p>
              We already handle all for you. <br /> All you have to do is signup
              and continue useing our service
            </p>

            <div className='px-4 py-3 md:text-left sm:px-6 lg:px-0 mt-5'>
              <Link
                to={"/blog"}
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
                Check More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-center font-semibold text-gray-600 text-4xl pt-20'>
          <h1>Lets see what our clients say</h1>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center gap-5 text-gray-800 mt-5 md:w-10/12 mx-auto'>
          <div className='md:w-4/12'>
            <div className='p-8 rounded gap-2 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
              <div className='flex flex-row  items-center justify-start'>
                <img
                  src={potrait1}
                  alt='name'
                  className='rounded-full h-16 hover:scale-125  cursor-pointer'
                ></img>
                <div>
                  <p className='px-3 text-lg'> Kira Whittle</p>
                  <p className='px-3 text-xs font-semibold text-gray-600'>
                    Top Rated User
                  </p>
                </div>
              </div>

              <p className='text-2xl py-5 leading-normal tracking-wider '>
                Such a life-changing experience. Highly recommended!
              </p>

              <p className='text-zinc-600 pb-4 line-clamp-4 overflow-hidden h-24'>
                Before joining the bootcamp, I’ve never written a line of code.
                I needed some structure from professionals who can help me learn
                programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the
                program.”
              </p>
            </div>
          </div>
          <div className='md:w-4/12'>
            <div className='p-8 rounded gap-2 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
              <div className='flex flex-row  items-center justify-start'>
                <img
                  src={potrait2}
                  alt='name'
                  className='rounded-full h-16 hover:scale-125  cursor-pointer'
                ></img>
                <div>
                  <p className='px-3 text-lg'> Faisal Ahmed</p>
                  <p className='px-3 text-xs font-semibold text-gray-600'>
                    Top Rated User
                  </p>
                </div>
              </div>

              <p className='text-2xl py-5 leading-normal tracking-wider '>
                The team was very supportive and they really kept me motivated
              </p>

              <p className='text-zinc-600 pb-4 line-clamp-4 overflow-hidden h-24'>
                I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p>
            </div>
          </div>
          <div className='md:w-4/12'>
            <div className='p-8 rounded gap-2 bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
              <div className='flex flex-row  items-center justify-start'>
                <img
                  src={potrait3}
                  alt='name'
                  className='rounded-full h-16 hover:scale-125  cursor-pointer'
                ></img>
                <div>
                  <p className='px-3 text-lg'> Neko Khan</p>
                  <p className='px-3 text-xs font-semibold text-gray-600'>
                    Top Rated User
                  </p>
                </div>
              </div>

              <p className='text-2xl py-5 leading-normal tracking-wider '>
                An overall wonderful and rewarding experience was very good
              </p>

              <p className='text-zinc-600 pb-4 line-clamp-4 overflow-hidden h-24'>
                I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
