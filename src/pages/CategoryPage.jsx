import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-11/12 max-w-[600px] mx-auto">
      <div><Header></Header></div>
      <div className="mt-14 flex items-start gap-x-2">
        <button className='border-2 border-gray-300  px-4 rounded-md'  onClick={() => navigate(-1)}>
          Back
        </button>
        <h2 className="text-xl font-bold">Blogs on: <span className="underline">{category}</span></h2>
      </div>
      <div className="flex flex-col items-start justify-center py-[-50px]"><Blogs/></div>
      <div><Pagination/></div>
    </div>
  );
};

export default CategoryPage;
