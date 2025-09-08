import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDetails from '../components/BlogDetails'


const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[550px] py-11 h-screen">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Blogs Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails post={post} key={post.id}/>)
      )}
    </div>
  );
};

export default Blogs;
