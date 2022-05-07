import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { MdOutlineEdit } from "react-icons/md";
import toast from "react-hot-toast";
import DeleteModal from "../components/DeleteModal";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const AllProducts = () => {
  // eslint-disable-next-line
  const [fetchingProduct, setFetchingProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    try {
      setFetchingProduct(true);
      const res = await axios.get(`/product?skip=${page * 10}`);
      setFetchingProduct(false);
      setProducts(res.data);
    } catch (err) {
      setFetchingProduct(false);
      toast.error("Something went wrong try again");
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    (async function () {
      try {
        setFetchingProduct(true);
        const res = await axios.get(`/product/productcount`);
        setFetchingProduct(false);
        setTotalPage(res.data.totalProducts);
      } catch (err) {
        setFetchingProduct(false);
        toast.error("Something went wrong try again");
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {fetchingProduct ? (
        <Loading />
      ) : (
        <div className='my-32'>
          <div className=' mx-auto lg:w-9/12 shadow-lg border border-gray-50 overflow-hidden rounded-lg p-5 mb-5'>
            <div className='px-4 py-3 bg-gray-50 text-center sm:px-6 mt-5 flex items-center gap-4'>
              <h1 className='text-lg font-semibold text-gray-700'>
                Manage all Items or{" "}
              </h1>
              <Link
                to={"/additem"}
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
                Add New Item
              </Link>
            </div>
          </div>
          <table className=' table-fixed w-full lg:w-9/12 md:mx-auto text-sm text-left text-gray-500 dark:text-gray-300 shadow-lg rounded-lg overflow-hidden border'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3 hidden md:block'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' className='px-6 py-3  hidden md:block'>
                  user
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                ? products.map((product) => {
                    return (
                      <tr
                        key={product._id}
                        className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                      >
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                        >
                          {product?.title && product?.title}
                        </th>
                        <td className='px-6 py-4 hidden md:block '>
                          ${product?.price && product?.price}
                        </td>
                        <td className='px-6 py-4'>
                          {product?.quantity && product?.quantity}
                        </td>
                        <td className='px-6 py-4  hidden md:block'>
                          {product?.displayName && product?.displayName}
                        </td>
                        <td className='px-6 py-4 text-right'>
                          <Link
                            to={`/inventory/${product._id}`}
                            className='inline-block font-medium text-gray-800 bg-yellow-300 py-1 px-2 text-md rounded mx-1'
                          >
                            <div className='flex justify-center items-center'>
                              <MdOutlineEdit />{" "}
                              <span className='text-xs'>Edit</span>
                            </div>
                          </Link>
                          <DeleteModal
                            fetchProducts={fetchProducts}
                            pid={product._id}
                          />
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          <div className='w-full my-5'>
            <div className=' flex justify-center'>
              <ul className='flex gap-3'>
                {/* {pageContext.currentPage > 1 ? "<<Prev" : null} */}
                {Array.from({ length: Math.ceil(totalPage / 10) }, (_, i) => {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => {
                          setPage(i);
                        }}
                        className={`px-3 py-1 rounded ${
                          i + 1 === page + 1 ? "bg-gray-500" : "bg-gray-300"
                        } `}
                      >
                        {i + 1}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
