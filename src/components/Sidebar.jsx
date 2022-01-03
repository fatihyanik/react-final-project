function Sidebar() {
  return (
    <div className="flex-[3] m-5 pb-7 bg-slate-50 rounded-[10px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <span className="m-[10px] p-[5px] w-4/5 border-[1px] border-y-gray-700 text-[12px] text-black font-semibold leading-5 text-center">
          ABOUT ME
        </span>
        <img
          className="mt-4"
          src="https://images.pexels.com/photos/3569950/pexels-photo-3569950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p className="p-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          blanditiis?
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="m-[10px] p-[5px] w-4/5 border-[1px] border-y-gray-700 text-[12px] text-black font-semibold leading-5 text-center">
          CATEGORIES
        </span>
        <ul className="mb-7 list-none">
          <li className=" inline-block w-1/2 mt-4 cursor-pointer">Life</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Music</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Style</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Sport</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Tech</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Cinema</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <span className="m-[10px] p-[5px] w-4/5 border-[1px] border-y-gray-700 text-[12px] text-black font-semibold leading-5 text-center">
          FOLLOW US
        </span>
        <div className="mt-4 w-[250px] flex items-center justify-center">
          <i className="text-[16px] ml-4 cursor-pointer fab fa-facebook-square"></i>
          <i className="text-[16px] ml-4 cursor-pointer fab fa-twitter-square"></i>
          <i className="text-[16px] ml-4 cursor-pointer fab fa-pinterest-square"></i>
          <i className="text-[16px] ml-4 cursor-pointer fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
