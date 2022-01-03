function Register() {
  return (
    <div className="h-[95vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-gray-300 bg-cover">
      <span className="text-[50px]">Register</span>
      <form className="mt-5 flex flex-col">
        <label className="my-[10px] mx-0">Username</label>
        <input
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your username..."
        />
        <label className="my-[10px] mx-0">Email</label>
        <input
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="my-[10px] mx-0">Password</label>
        <input
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="mt-5 cursor-pointer bg-teal-700 text-white p-[10px] border-none rounded-[10px] text-center">
          Register
        </button>
      </form>
      <button className="absolute top-[60px] right-[20px] bg-red-400 cursor-pointer p-[10px] border-none text-white rounded-[10px]">
       
          Login
        
      </button>
    </div>
  );
}

export default Register;
