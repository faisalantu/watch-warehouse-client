import React, { useEffect, useRef, useState } from "react";
import ManageProductCard from "../components/ManageProductCard";
import { Link, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import toast from "react-hot-toast";

const Inventory = () => {
  const [products, setProducts] = useState(null);
  const location = useLocation();
  const totalQuantity = useRef("");

  const fetchPost = async () => {
    const urlArr = location.pathname.split("/");
    const _id = urlArr[urlArr.length - 1];
    try {
      const res = await axios.get(`/product/one?productId=${_id}`);
      setProducts(res.data[0]);
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  const reduceQuantity = async () => {
    let tempQuantity = products.quantity - 1;
    if(tempQuantity <0){
      toast.error("nothing in stock please restock")
      return
    }
    try {
      const res = await axios.put(
        `/product/quantity?productId=${products._id}`,
        {
          quantity: tempQuantity,
        }
      );
      setProducts(res.data);
      toast.success("successfuly deivred");
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempQuantity = products.quantity;
    const updatedQuantity =
      Number(tempQuantity) + Number(totalQuantity.current.value);
    try {
      const res = await axios.put(
        `/product/quantity?productId=${products._id}`,
        {
          quantity: updatedQuantity,
        }
      );
      setProducts(res.data);
      totalQuantity.current.value = "";
      toast.success("successfuly updated");
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {products ? (
        <div className='md:flex my-12'>
          <div className='md:w-6/12 flex items-center justify-center'>
            <div>
              <ManageProductCard
                reduceQuantity={reduceQuantity}
                product={products}
              />
            </div>
          </div>
          <div className='md:w-6/12'>
            <form
              className='md:w-8/12 shadow-lg border border-gray-50 overflow-hidden rounded-lg p-5'
              onSubmit={handleSubmit}
            >
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
                    ref={totalQuantity}
                    className='p-2 shadow-sm outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='0'
                    defaultValue={""}
                    type='number'
                    required
                  />
                </div>
                <p className='my-2 text-sm text-gray-500 select-none'>
                  Change your quantiry.
                </p>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                >
                  Restock
                </button>
              </div>
            </form>
            <div className='md:w-8/12 shadow-lg border border-gray-50 overflow-hidden rounded-lg p-5'>
              <div className='px-4 py-3 bg-gray-50 text-center sm:px-6 mt-5'>
                <Link
                  to={"/allproduct"}
                  className='flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                >
                  Manage All Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "no products"
      )}
    </>
  );
};

export default Inventory;
