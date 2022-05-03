import React from "react";
import loginImg from "../assets/loginV2.svg";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='flex flex-col md:flex-row py-10 my-10'>
      <div className='lg:w-6/12'>
        <img className='w-9/12 mx-auto' src={loginImg} alt='loign' />
      </div>
      <div className='lg:w-6/12 text-gray-700 mt-10 md:mt-0 p-3 md:p-0'>
        <div className='lg:w-6/12 mx-auto'>
          <form>
            <div className='mb-6'>
              <input
                type='email'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none'
                placeholder='Email address'
                required
                autoFocus
              />
            </div>
            <div className='mb-6'>
              <input
                type='password'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none'
                placeholder='Password'
                required
              />
            </div>
            <div className='flex justify-between items-center'>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-300  focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  id='agreeTermsAndCondition'
                  required
                />
                <label
                  className='form-check-label inline-block text-gray-800'
                  htmlFor='agreeTermsAndCondition'
                >
                  I agree with the terms and conditions
                </label>
              </div>
            </div>
            <button className='text-green-600 hover:text-green-700 py-3'>
              Forgot password?
            </button>

            <button className='inline-block px-7 py-3 bg-green-300 font-semibold text-sm leading-snug uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg  w-full'>
              Sign in
            </button>

            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center font-semibold mx-4 mb-0'>OR</p>
            </div>

            <div className='flex flex-row items-center justify-center lg:justify-start'>
              <p className='text-lg mb-0 mr-4'>Sign in with</p>
              <button className='inline-block p-3 bg-green-300 font-medium text-2xl leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg  mx-1'>
                <AiOutlineGoogle />
              </button>
            </div>

            <div className='w-full border-t mt-5 py-4'>
              <span className='text-sm'>Don't have an account? </span>
              <Link
                to='/register'
                className='text-green-500 text-sm font-semibold hover:text-green-600'
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
