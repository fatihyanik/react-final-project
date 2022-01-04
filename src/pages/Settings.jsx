import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex">
      <div className="flex-9 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[30px] mb-5 text-blue-600">
            Update Your Account
          </span>
          <span className="text-red-300 text-[12px] cursor-pointer">
            Delete Account
          </span>
        </div>
        <form className="flex flex-col">
          <label className="text-[20px] mt-[20px]">Profile Picture</label>
          <div className="flex items-center mt-[10px] mb-[10px]">
            <img
              className="h-[70px] w-[70px] rounded-[20px] object-cover"
              src="https://images.pexels.com/photos/4173558/pexels-photo-4173558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <label className="text-[20px] mt-[20px]" htmlFor="fileInput">
              <i className="settingsPPIcon w-[25px] h-[25px] p-[5px] flex justify-center items-center border-none rounded-full ml-[10px] text-white  bg-indigo-500 cursor-pointer far fa-user-circle"></i>
            </label>
            <input
              className="text-gray-400 mt-[10px] mb-[10px] h-[30px] border-none border-b"
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label className="text-[20px] mt-[20px]">Username</label>
          <input type="text" placeholder="Fatih" />
          <label className="text-[20px] mt-[20px]">E-mail</label>
          <input type="email" placeholder="fatih@gmail.com" />
          <label className="text-[20px] mt-[20px]">Password</label>
          <input type="password" placeholder="Fatih" />
          <button className="self-center w-[150px] border-none rounded-[10px] text-white bg-teal-300 p-[10px] mt-[20px] cursor-pointer flex items-center justify-center hover:bg-sky-700 ">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
