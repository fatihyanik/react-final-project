import { useState } from "react";

function Write({ posts, setPosts }) {
  const postDate = new Date().toDateString();

  const [postState, setPostState] = useState({
    id: posts.length + 2 + Math.floor(Math.random() * 100 + 1),
    title: "",
    image: "",
    date: postDate,
    author: "Fatih Yanik",
    content: "",
    theme: "",
    comments: [],
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    setPostState({ ...postState, [e.target.name]: dataVonInput });
  }

  function addNewPost(e) {
    e.preventDefault();
    const newArray = [...posts, postState];
    setPosts(newArray);
    alert("Your post added successfully!");
  }


  return (
    <div className="pt-[100px]">
        <img
          className="ml-[30px] w-[80vw] h-[20rem] rounded-[10px] md:h-[30rem]"
          src="https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />

      <div className="flex">
        <form onSubmit={addNewPost}>
          <div>
            <div className="ml-[15px] flex items-center">
              <input
                name="title"
                onChange={inputChange}
                className="text-[25px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Title"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[15px] flex items-center">
              <input
                name="image"
                onChange={inputChange}
                className="text-[25px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Image Address"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[15px] flex items-center">
              <input
                name="theme"
                onChange={inputChange}
                className="text-[25px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Theme"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[15px] flex items-center">
              <textarea
                name="content"
                onChange={inputChange}
                className="text-[25px] rounded-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
                required
              />
            </div>
              <div>
                <button
                  className="ml-[30px] text-white bg-teal-700 p-[10px] border-none rounded-[10px] text-[16px] cursor-pointer flex items-center"
                  type="submit"
                >
                  Publish
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Write;
