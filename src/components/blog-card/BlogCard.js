import React from "react";
import Links from "../utils/Links";
import Badge from "../utils/Badge";

const BlogCard = ({ blog }) => {

  return (
    <>
        <div className="sm:grid sm:grid-cols-10 hover:bg-teal-600 p-4 rounded-md cursor-pointer transition-all">
          <div className="sm:col-span-7 sm:order-2 sm:flex sm:flex-col sm:justify-start">
            <a className=" font-bold text-gray-900 ">{blog.title}</a>
            
            <div className="flex sm:justify-end">
            <Badge>{blog.year}</Badge>
            <Badge>{"Blog"}</Badge>
            </div>
          </div>

          <div className="mt-3 sm:mt-0 flex flex-wrap justify-start sm:col-span-3 sm:order-1 sm:justify-center">
            <img
              src="https://picsum.photos/200/300"
              className="mr-3 mt-3 w-[19rem] h-[9rem] object-cover rounded-md"
              alt=""
              
            />
            {/* <img src="https://picsum.photos/200/300" className="mr-3 mt-3 w-[19rem] h-[9rem] object-cover" alt="" /> */}
          </div>
        </div>
    </>
  );
};

export default BlogCard;
