import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost({ posts }) {
  const params = useParams();

  console.log(posts);

  const filteredPost = posts.filter((post) => {
    return post.id === parseInt(params.id);
  });

  return (
    <div className="flex-[9]">
      <div className="p-5 pr-0">
        <img
          src={filteredPost[0].image}
          alt=""
          className="w-full h-72 rounded object-cover"
        />
        <h1 className="text-center m-[10px] text-[28px] font-serif">
          {filteredPost[0].title}
          <div className="float-right text-[16px]">
            <i className="text-teal-600 ml-3 cursor-pointer far fa-edit"></i>
            <i className="text-red-600 ml-3 cursor-pointer  far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-[16px] font-serif text-yellow-600">
          <span className="text-yellow-900">
            Author: <b>{filteredPost[0].author}</b>
          </span>
          <span>{filteredPost[0].date}</span>
        </div>
        <p
          className="text-gray-600 text-[18px] leading-6
          first-letter:text-7xl first-letter:font-bold first-letter:text-black
          first-letter:mr-3 first-letter:float-left"
        >
          {filteredPost[0].content}
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
