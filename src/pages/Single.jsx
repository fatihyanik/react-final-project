import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import SinglePost from "../components/SinglePost";

function Single({ posts, setPosts, currentUser }) {
  const params = useParams();


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




    const newPost = {
      commentUser: currentUser.name ? currentUser.name : "Unknown Person",
      commentDate: new Date().toDateString(),
      commentContent: content,
      commentImage: currentUser.image ? currentUser.image : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    };
    const aktuelPost = filteredCommentPost;

    aktuelPost.comments.push(newPost);

    const newALLPOST = [...posts];

    setPosts(newALLPOST);
  }

  return (
    <div className="flex flex-col">
      <SinglePost posts={posts} setPosts={setPosts} currentUser={currentUser} />

      <form onSubmit={addComment} className="mt-5 flex flex-col m-10">
        <label className="my-[10px] mx-0 flex justify-center">Add Your Comment </label>
        <textarea
          name="content"
          id="content"
          className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your message..."
          cols="20"
          rows="2"
          required
        />
        <button className="mt-3 cursor-pointer bg-teal-400 hover:bg-teal-600 text-white p-[10px] border-none rounded-[10px] text-center">
          Add Comment
        </button>
      </form>

      <Comment posts={posts} />
    </div>
  );
}

export default Single;
