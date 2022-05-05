import React from "react";
import ManageProductCard from "../components/ManageProductCard";

const Inventory = () => {
  return (
    <div className='md:flex my-12'>
      <div className='md:w-6/12 flex items-center justify-center'>
        <div>
          <ManageProductCard />
        </div>
      </div>
      <div className='md:w-6/12'>
        <form className="md:w-8/12 shadow-lg border border-gray-50 overflow-hidden rounded-lg p-5" action=''>
          <div>
            <label
              htmlFor='about'
              className='block text-sm font-medium text-gray-700'
            >
              Quantity
            </label>
            <div className='mt-1'>
              <input
                id='about'
                name='about'
                className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                placeholder='0'
                defaultValue={""}
                type="number"
              />
            </div>
            <p className='my-2 text-sm text-gray-500 select-none'>
              Change your quantiry.
            </p>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
