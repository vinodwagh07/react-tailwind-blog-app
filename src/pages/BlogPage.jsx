import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Pagination from "../components/Pagination";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const { loading, setLoading } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setBlog(data.blog);
      console.log(blog);
      setRelatedblog(data.relatedBlogs);
      console.log(data.relatedBlogs);
    } catch (e) {
      console.log("Error at fetching data by BLOGID");
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="flex flex-col w-11/12 max-w-[600px] mx-auto">
        <div className="mt-10 self-start">
          <button
            className="border-2 border-gray-300  px-4 rounded-md"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2>Releated Blogs</h2>
              {relatedblog.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
