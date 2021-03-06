function Post({ post }) {
  return (
    <div className="w-96 mt-10 mr-12 mb-7 ml-3">
      <img
        className="w-full h-72  rounded-[8px]"
        src={post.image}
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="text-[11px] text-yellow-500 leading-5 mt-3 cursor-pointer">
          <span className="text-[11px] text-yellow-500 leading-5 mt-3 cursor-pointer">
            {post.theme}
          </span>
        </div>
        <span className="text-[24px] font-bold mt-3 cursor-pointer">
          {post.title}
        </span>
        <hr />
        <span className="italic text-[13px] text-gray-400 mt-3">
          {post.date}
        </span>
      </div>
      <p className="text-[14px] text-gray-700 leading-6 mt-3 overflow-hidden text-ellipsis ">
        {post.content}
      </p>
    </div>
  );
}

export default Post;