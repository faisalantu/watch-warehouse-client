import React from "react";
import imgg from "../assets/banner.png"

const ProductCard = () => {
  return (
    <div className='bg-gray-50 shadow-md rounded-lg w-72 p-3'>
      <div className=' '>
        <div className='h-32 bg-white rounded overflow-hidden mb-5'>
          <img src={imgg} alt="nno0n" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt
          sit, ad cum ab possimus id! Tenetur pariatur sapiente vitae.
        </p>
        <button className="font-semibold text-gray-800 text-center w-full py-2 bg-green-300 rounded-lg mt-4">
          Manage
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
