import React from "react";
import { Link } from "react-router-dom";
import imgg from "../assets/banner.png";

const ProductCard = ({ data }) => {
  const { title, description, imageUrl, price, quantity, displayName, _id } = data;
  // const descriptionRender = ()=>{
  //   if(description.lengt)
  // }
  return (
    <div className='bg-gray-50 shadow-md rounded-lg w-72 p-3 text-gray-800'>
      <div className=' '>
        <div className='w-full h-48 bg-white rounded overflow-hidden mb-5'>
          <img className="object-cover h-full mx-auto" src={imageUrl?imageUrl:imgg} alt='nno0n' />
        </div>
        <h1 className="font-semibold my-2 text-lg">{title && title}</h1>
        <p className=" overflow-hidden line-clamp-4">
          {description && description }
        </p>
        <div>
          <p className='font-semibold my-2'>Price: {price&&price}$</p>
          <p className='font-semibold my-2'>Quantity: {quantity && quantity}</p>
          <p className='text-xs my-2 text-gray-600'>Seller: {displayName &&displayName}</p>
        </div>
        <Link
          to={`/inventory/${_id}`}
          className='font-semibold text-gray-800 text-center w-full py-2 bg-green-300 rounded-lg mt-4 block'
        >
          Manage
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
