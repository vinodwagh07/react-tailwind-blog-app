import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="w-11/12 max-w-[600px] mx-auto">
      <div className="flex flex-col items-start justify-center py-4">
        <NavLink to={`/blog/${post.id}`}>
          <span className="text-black font-bold">{post.title}</span>
        </NavLink>

        <p className="text-[14px]">
          By{" "}
          <span>
            <span className="italic">{post.author}</span> on{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
              <span className="font-bold italic underline">
                {post.category}
              </span>
            </NavLink>
          </span>
        </p>
        <p className="text-[14px]">Posted on {post.date}</p>

        <p className="text-[14px] text-left pt-2 font-normal">{post.content}</p>
        <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
          {post.tags.map((tag, index) => (
            <NavLink
              className="pr-1 underline text-blue-900 font-semibold"
              key={index}
              to={`/tags/${tag.replaceAll(" ", "-")}`}
            >
              <span>{`#${tag}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default BlogDetails;
