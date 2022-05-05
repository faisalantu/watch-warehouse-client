import React from "react";
import { Link } from "react-router-dom";
import imgg from "../assets/banner.png";

const ProductCard = () => {
  return (
    <div className='bg-gray-50 shadow-md rounded-lg w-72 p-3 text-gray-800'>
      <div className=' '>
        <div className='h-32 bg-white rounded overflow-hidden mb-5'>
          <img src={imgg} alt='nno0n' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt
          sit, ad cum ab possimus id! Tenetur pariatur sapiente vitae.
        </p>
        <div>
          <p className="font-semibold my-2">Price: 100 taka</p>
          <p className="font-semibold my-2">Quantity: 12</p>
          <p className="text-xs my-2 text-gray-600">Seller: Faisal Ahmed</p>
        </div>
        <Link
          to={"/inventory/sd"}
          className='font-semibold text-gray-800 text-center w-full py-2 bg-green-300 rounded-lg mt-4 block'
        >
          Manage
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
