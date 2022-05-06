import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import axios from "../axiosConfig";
const DeleteModal = ({ pid,fetchProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const onDelete = async (e) => {
    e.preventDefault();
    setShowModal(false);
    const data = {
      productId: pid,
    };
    try {
      await axios.delete("/product/one", {
        data: data,
      });

      toast.success("Product Deleted");
      fetchProducts()
      // window.location.reload();
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='font-medium text-gray-800 bg-red-300 py-1 px-2 text-md rounded mx-1'
      >
        <div className='flex justify-center items-center'>
          <MdDelete /> <span className='text-xs'>Delete</span>
        </div>
      </button>
      {showModal ? (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full">
          <div className=' bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0'>
            <div className='bg-gray-50 px-16 py-14 rounded-md text-center shadow-2xl border border-gray-50'>
              <h1 className='text-lg mb-4 font-bold text-gray-700'>
                Do you Want Delete ?
              </h1>
              <button
                onClick={() => setShowModal(false)}
                className='bg-green-400 font-semibold px-3 text-black py-2 rounded-md text-md'
              >
                Cancle
              </button>
              <button
                onClick={onDelete}
                className='bg-red-400 font-semibold px-3 text-black py-2 rounded-md text-md ml-2'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteModal;
