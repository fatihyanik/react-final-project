function Write() {
  function createNewPost(e) {
    e.preventDefault();
  }

  return (
    <div className="pt-[50px]">
      <img
        className="ml-[150px] w-[80vw] h-[20rem] rounded-[10px] object-cover"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="relative">
        <div className="ml-[150px] flex items-center">
          <input
            className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="ml-[150px] flex items-center">
          <input
            className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
            placeholder="Image Address"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="ml-[150px] flex items-center">
          <input
            className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
            placeholder="Theme"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="ml-[150px] flex items-center">
          <textarea
            className="text-[30px] rounded-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button
          className="absolute top-[20px] right-[50px] text-white bg-teal-700 p-[10px] border-none rounded-[10px] text-[16px] cursor-pointer flex items-center "
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
