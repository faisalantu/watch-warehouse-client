import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='bg-gray-700 text-white p-3 md:p-0 mt-10'>
      <div className='container mx-auto pt-20 pb-10  flex flex-col-reverse md: md:flex-row-reverse justify-center items-center md:justify-evenly'>
        <div className='flex md:flex-col mt-5 md:mt-0 md:border-l border-gray-500'>
          <Link className='mx-1 px-1' to='/'>
            Home
          </Link>
          <Link className='mx-1 px-1' to='/myitems'>
            My Items
          </Link>
          <Link className='mx-1 px-1' to='/blogs'>
            Blogs
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center text-center mb-5 md:mb-0 md:block'>
          <h2 className='font-semibold text-2xl flex items-center mb-3'>
            My Watch
          </h2>
          <p className='mb-3'>
            Manage your time and watch with ease with our storage management
            system
          </p>
        </div>
      </div>
      <div className='container mx-auto flex justify-evenly space-x-2 mt-4 pb-10'>
        <span className='bg-gray-500 h-px flex-grow t-2 relative top-3'></span>
        <div className='flex text-3xl gap-3 px-5'>
          <a
            href='https://www.twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiSocialTwitter />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillInstagram />
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookSquare />
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin />
          </a>
        </div>
        <span className='bg-gray-500 h-px flex-grow t-2 relative top-3'></span>
      </div>
    </div>
  );
};

export default Footer;
