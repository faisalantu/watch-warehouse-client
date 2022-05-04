import React from "react";

const AddItem = () => {
  return (
    <div className='my-32 md:col-span-2'>
      <form
        className='shadow-lg border overflow-hidden rounded-lg lg:w-8/12 mx-auto'
        action='#'
        method='POST'
      >
        <div className='shadow sm:rounded-md sm:overflow-hidden'>
          <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
            <div>
              <label
                htmlFor='about'
                className='block text-sm font-medium text-gray-700'
              >
                Title
              </label>
              <div className='mt-1'>
                <input
                  id='about'
                  name='about'
                  className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                  placeholder='Product Name'
                  defaultValue={""}
                />
              </div>
              <p className='mt-2 text-sm text-gray-500 select-none'>
                Brief description about the product.
              </p>
            </div>
            <div>
              <div className='col-span-3 sm:col-span-2'>
                <label
                  htmlFor='photoUrl'
                  className='block text-sm font-medium text-gray-700'
                >
                  Image url
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <span className='inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    http://
                  </span>
                  <input
                    id='photoUrl'
                    type='text'
                    className='border px-2 outline-none focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                    placeholder='www.example.com'
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-6/12 pr-5">
                <label
                  htmlFor='about'
                  className='block text-sm font-medium text-gray-700'
                >
                  Quantity
                </label>
                <div className='mt-1'>
                  <input
                    id='quantity'
                    className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='0'
                    defaultValue={""}
                    type="number"
                  />
                </div>
                
              </div>
              <div className="w-6/12 lg:pl-5">
                <label
                  htmlFor='about'
                  className='block text-sm font-medium text-gray-700'
                >
                  Price
                </label>
                <div className='mt-1'>
                  <input
                    id='price'
                    className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='0'
                    defaultValue={""}
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor='about'
                className='block text-sm font-medium text-gray-700'
              >
                Description
              </label>
              <div className='mt-1'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                  placeholder='you@example.com'
                  defaultValue={""}
                />
              </div>
              <p className='mt-2 text-sm text-gray-500 select-none'>
                Brief description about the product.
              </p>
            </div>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
