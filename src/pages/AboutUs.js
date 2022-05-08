import React from "react";
import teamImg from "../assets/team.svg";
import contactImg from "../assets/contact.svg";
const AboutUs = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col md:flex-row items-center py-12 text-gray-800 my-10'>
          <div className='md:w-6/12'>
            <img className='w-7/12 mx-auto' src={teamImg} alt='humns' />
          </div>
          <div className='md:w-6/12 flex items-center justify-center flex-col mb-6 md:mb-0'>
            <h1 className='text-2xl font font-semibold mb-5'>
              Learn More About us
            </h1>
            <p className='text-center'>
              Our company will take a good care of you. When it comes to
              personalizing your online store Management nothing is more
              effective than an About Us. This is a quick summary of your
              company's history and purpose, and should provide a clear overview
              of the company's brand story. A great this page can help tell your
              brand story, establish customer loyalty, and turn your bland
              Management store into an well-loved brand icon. Most importantly,
              it will give your customers all the reasons to use our brand.
            </p>
          </div>
        </div>
        <div>
          <div className='border-t border-b md:w-8/12 mx-auto border-gray-100 text-center p-4 text-gray-700'>
            <h1 className='text-2xl font font-semibold mb-3'>
              Total Delevred: <span className='text-green-500'>148721+</span>
            </h1>
            <h1 className='text-2xl font font-semibold'>
              Total Users: <span className='text-green-500'>2548</span>
            </h1>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse items-center py-12 text-gray-800 my-10'>
          <div className='md:w-6/12'>
            <img className='w-10/12 mx-auto' src={contactImg} alt='humns' />
          </div>
          <div className='md:w-6/12 flex items-center justify-center flex-col mb-6 md:mb-0'>
            
            <form className='md:w-8/12 shadow-lg border border-gray-50 overflow-hidden rounded-lg p-5'>
            <p className='text-2xl font font-semibold mb-5'>Stay With Us</p>
              <div>
                <label
                  htmlFor='about'
                  className='block text-sm font-medium text-gray-700'
                >
                  Your Email
                </label>
                <div className='mt-1'>
                  <input
                    id='about'
                    className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='hello@faisalantu.com'
                    defaultValue={""}
                    type='email'
                    required
                  />
                </div>
                <p className='my-2 text-sm text-gray-500 select-none'>
                  We won't share your email with ohters 🍉
                </p>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-center sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
