import React from "react";
import { MdDelete,MdOutlineEdit } from "react-icons/md";
// import { MdOutlineEdit } from "react-icons/gr";
const MyItems = () => {
  return (
    <div className='my-32'>
      <table className=' table-fixed w-full lg:w-9/12 md:mx-auto text-sm text-left text-gray-500 dark:text-gray-300 shadow-lg rounded-lg overflow-hidden border'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Product name
            </th>
            <th scope='col' className='px-6 py-3'>
              Color
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Apple MacBook Pro 17"
            </th>
            <td className='px-6 py-4'>Sliver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
            <td className='px-6 py-4 text-right'>
              <button className='font-medium text-gray-800 bg-yellow-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdOutlineEdit /> <span className='text-xs'>Edit</span>
                </div>
              </button>
              <button className='font-medium text-gray-800 bg-red-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdDelete /> <span className='text-xs'>Delete</span>
                </div>
              </button>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Microsoft Surface Pro
            </th>
            <td className='px-6 py-4'>White</td>
            <td className='px-6 py-4'>Laptop PC</td>
            <td className='px-6 py-4'>$1999</td>
            <td className='px-6 py-4 text-right'>
              <button className='font-medium text-gray-800 bg-yellow-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdOutlineEdit /> <span className='text-xs'>Edit</span>
                </div>
              </button>
              <button className='font-medium text-gray-800 bg-red-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdDelete /> <span className='text-xs'>Delete</span>
                </div>
              </button>
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Black</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$99</td>
            <td className='px-6 py-4 text-right'>
              <button className='font-medium text-gray-800 bg-yellow-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdOutlineEdit /> <span className='text-xs'>Edit</span>
                </div>
              </button>
              <button className='font-medium text-gray-800 bg-red-300 py-1 px-2 text-md rounded mx-1'>
                <div className="flex justify-center items-center">
                  <MdDelete /> <span className='text-xs'>Delete</span>
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
