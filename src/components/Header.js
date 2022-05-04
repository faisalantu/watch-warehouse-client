import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className=" bg-gray-50">
      <nav className='container mx-auto text-gray-700 '>
        <div className='justify-between py-4 hidden md:flex'>
          <div className='font-semibold text-xl flex items-center'>
            <Link to='/'>My Watch</Link>
          </div>
          <div className='flex justify-center items-center'>
            <CustomLink className='mx-1 px-1' to='/'>
              Home
            </CustomLink>
            <CustomLink className='mx-1 px-1' to='/about'>
              About
            </CustomLink>
            {user ? (
              <div className='flex justify-center items-center'>
                <button
                  onClick={() => {
                    signOut(auth);
                  }}
                  className='mx-1 px-1'
                >
                  logout{" "}
                </button>
                <CustomLink className='mx-1 px-1' to='/myitems'>
                  My Items
                </CustomLink>
                <CustomLink className='mx-1 px-1' to='/additem'>
                  Add Item
                </CustomLink>
              </div>
            ) : (
              <CustomLink className='mx-1 px-1' to='/login'>
                login
              </CustomLink>
            )}
          </div>
        </div>

        <div className='p-4 md:hidden'>
          <div className='flex justify-between'>
            <div className='font-semibold text-xl flex items-center'>
              <Link to='/'>My Watch</Link>
            </div>
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              className='text-xl'
            >
              <GiHamburgerMenu />
            </button>
          </div>
          {openMenu ? (
            <div className={`flex flex-col mt-4`}>
              <CustomLink to='/'>Home</CustomLink>
              <CustomLink to='/about'>About</CustomLink>
              {user ? (
                <div
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  logout{" "}
                </div>
              ) : (
                <CustomLink to='/login'>login</CustomLink>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
