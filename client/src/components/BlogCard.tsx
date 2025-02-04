import React from "react";
import {Link} from "react-router-dom";
import { iData } from "../functions/interface";

const BlogCard: React.FC<iData> = (post) => {
  return (
    <>
    
      <Link to={`/read-blog/${post._id}`} >
        <div className="bg_primary p-2 h-[100px] flex flex-col justify-center items-center rounded-2xl">
          <div>
              <div className="text-white font-bold w-full]">ID : {post?._id}</div>
              <div className="text-white font-bold">Name : {post?.name} </div>
              <div className="text-white font-bold">age : {post?.age} </div>
          </div>
        </div>
      </Link >
    </>
  );
};

export default BlogCard;
