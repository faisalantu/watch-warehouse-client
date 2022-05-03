import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <div className='text-gray-700 '>
      <div className='justify-between py-4 hidden md:flex'>
        <div className='font-semibold text-xl flex items-center'>
          <Link to='/'>
            My Watch
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <CustomLink className='mx-1 px-1' to='/'>
            Home
          </CustomLink>
          <CustomLink className='mx-1 px-1' to='/about'>
            About
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
