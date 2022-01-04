function Header() {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col items-center text-gray-400">
        <span className="absolute top-[175px] text-[20px]">React & Node</span>
        <span className="absolute top-[175px] text-[100px]">BLOG</span>
      </div>
      <img
        className="w-full h-[450px] mt-[80px] object-cover"
        src="https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </div>
  );
}

export default Header;
