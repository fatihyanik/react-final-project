import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SinglePost({ posts, setPosts, currentUser }) {
  const params = useParams();

  const filteredPost = posts.filter((post) => {
    return post.id === parseInt(params.id);
  });

  function deletePost() {
    const newArray = [...posts];

    newArray.forEach((post, index) => {
      console.log(post.id, params.id);

      if (post.id === parseInt(params.id)) {
        newArray.splice(index, 1);
      }
    });

    setPosts(newArray);
    alert("This post is deleted!");
  }

  const postDate = new Date().toDateString();

  const [postState, setPostState] = useState({
    id: parseInt(params.id),
    title: "",
    image: "",
    date: postDate,
    author: currentUser.name,
    content: "",
    theme: "",
  });

  function openEditForm() {
    const editForm = document.querySelector("#editForm");

    if (editForm.getAttribute("style") === "display:none") {
      editForm.setAttribute("style", "display:block");
    } else if (editForm.getAttribute("style") !== "display:none") {
      editForm.setAttribute("style", "display:none");
    }
  }

  function inputChange(e) {
    let dataVonInput = e.target.value;

    setPostState({ ...postState, [e.target.name]: dataVonInput });
  }

  function editPost(e) {
    const newArray = [...posts];

    newArray.splice(parseInt(filteredPost[0].id) - 1, 1, postState);

    console.log(newArray);

    setPosts(newArray);

    console.log(posts);

    e.preventDefault();
    alert("Your post successfully edited!");
  }

  return (
    <div className="flex-[9]">
      <div className="p-5 pr-0">
        <img
          src={filteredPost[0].image}
          alt=""
          className="w-full h-72 rounded object-cover"
        />
        <h1 className="text-center m-[10px] text-[28px] font-serif">
          {filteredPost[0].title}
          <div className="float-right text-[16px]">
            {currentUser.admin ? (
              <>
                <i
                  onClick={openEditForm}
                  className="text-teal-600 ml-3 cursor-pointer far fa-edit"
                ></i>
                <Link to="/" onClick={deletePost}>
                  {" "}
                  <i className="text-red-600 ml-3 cursor-pointer  far fa-trash-alt"></i>
                </Link>
              </>
            ) : null}
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-[16px] font-serif text-yellow-600">
          <span className="text-yellow-900">
            Author: <b>{filteredPost[0].author}</b>
          </span>
          <span>{filteredPost[0].date}</span>
        </div>
        <p
          className="text-gray-600 text-[18px] leading-6
          first-letter:text-7xl first-letter:font-bold first-letter:text-black
          first-letter:mr-3 first-letter:float-left"
        >
          {filteredPost[0].content}
        </p>
      </div>

      {currentUser.admin ? (
        <form style={{ display: "none" }} id="editForm" onSubmit={editPost}>
          <div>
            <div className="ml-[150px] flex items-center">
              <input
                name="title"
                onChange={inputChange}
                className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Title"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[150px] flex items-center">
              <input
                name="image"
                onChange={inputChange}
                className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Image Address"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[150px] flex items-center">
              <input
                name="theme"
                onChange={inputChange}
                className="text-[30px] border-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none"
                placeholder="Theme"
                type="text"
                autoFocus={true}
                required
              />
            </div>
            <div className="ml-[150px] flex items-center">
              <textarea
                name="content"
                onChange={inputChange}
                className="text-[30px] rounded-none p-[20px] w-[70vw] placeholder:text-gray-400 font-normal focus:outline-none writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
                required
              />
              <div>
                <button
                  className="right-[50px] text-white bg-teal-700 p-[10px] border-none rounded-[10px] text-[16px] cursor-pointer flex items-center "
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default SinglePost;
