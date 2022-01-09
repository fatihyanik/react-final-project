import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Comment from "../components/Comment";
import SinglePost from "../components/SinglePost";

function Single({ posts, setPosts, currentUser }) {
  const params = useParams();
  const [postIndex, setPostIndex] = useState();

  function addComment(e) {
    e.preventDefault();

    const contentInput = document.querySelector("#content");
    const content = contentInput.value;

    let filteredCommentPost;
    let selectedIndex;

    posts.forEach((post, index) => {
      if (parseInt(params.id) === post.id) {
        selectedIndex = index;

        filteredCommentPost = post;
      }
    });

    setPostIndex(selectedIndex);

    console.log(currentUser);

    const newPost = {
      commentUser: currentUser.name ? currentUser.name : "Kayitli olmayan kisi",
      commentDate: new Date().toDateString(),
      commentContent: content,
      commentImage: currentUser.image,
    };
    const aktuelPost = filteredCommentPost;

    aktuelPost.comments.push(newPost);

    const newALLPOST = [...posts];

    setPosts(newALLPOST);
  }

  return (
    <div className="flex flex-col">
      <SinglePost posts={posts} setPosts={setPosts} currentUser={currentUser} />
      <form onSubmit={addComment} className="mt-5 flex flex-col">
        <div>
          <button className="bg-indigo-500 w-24">Add Comment</button>
          <label className="my-[10px] mx-0">Content: </label>
          <textarea
            name="content"
            id="content"
            className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
            type="text"
            placeholder="Enter your username..."
            required
          />
        </div>
      </form>
      <Comment posts={posts} />
    </div>
  );
}

export default Single;
