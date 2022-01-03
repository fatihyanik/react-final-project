function Post() {
  return (
    <div className="w-96 mt-0 mr-6 mb-10 ml-6">
      <img
        className="w-full h-72 object-cover rounded-[7px]"
        src="https://images.pexels.com/photos/4173557/pexels-photo-4173557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="text-[11px] text-yellow-500 leading-5 mt-4 cursor-pointer">
          <span className="text-[11px] text-yellow-500 leading-5 mt-4 cursor-pointer">
            Music
          </span>
          <span className="text-[11px] text-yellow-500 leading-5 mt-4 cursor-pointer">
            Life
          </span>
        </div>
        <span className="text-[24px] font-bold mt-4 cursor-pointer">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="italic text-[13px] text-gray-400 mt-4">
          1 hour ago
        </span>
      </div>
      <p className="text-[14px] text-gray-700 leading-6 mt-4 overflow-hidden text-ellipsis ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, excepturi
        sed provident nam temporibus reprehenderit ullam laudantium
        exercitationem nisi, quis iure? Pariatur hic officiis reiciendis velit
        sapiente, eius, deserunt ipsam ipsum assumenda dicta repellat soluta sit
        adipisci porro repellendus voluptate cum minima incidunt amet
        exercitationem inventore autem perspiciatis quas voluptatibus. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Post;
