function Header() {
  return (
    <div className="mt-[87px] sm:pr-5">
      <div className="flex flex-col items-center text-gray-400">
        <span className="absolute top-[80px] text-[20px]">Welcome To </span>
        <span className="absolute top-[100px] text-[30px]">Fatih's BLOG</span>
      </div>
        <img
          className="w-full h-[350px] object-cover p-3 mt-3 "
          src="https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
  );
}

export default Header;
