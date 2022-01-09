function Post({ post }) {
  return (
    <div className="w-96 mt-10 mr-10 mb-10 ml-10">
      <img
        className="w-full h-72 object-cover rounded-[7px]"
        src={post.image}
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="text-[11px] text-yellow-500 leading-5 mt-4 cursor-pointer">
          <span className="text-[11px] text-yellow-500 leading-5 mt-4 cursor-pointer">
            {post.theme}
          </span>
        </div>
        <span className="text-[24px] font-bold mt-4 cursor-pointer">
          {post.title}
        </span>
        <hr />
        <span className="italic text-[13px] text-gray-400 mt-4">
          {post.date}
        </span>
      </div>
      <p className="text-[14px] text-gray-700 leading-6 mt-4 overflow-hidden text-ellipsis ">
        {post.content}
      </p>
    </div>
  );
}

export default Post;