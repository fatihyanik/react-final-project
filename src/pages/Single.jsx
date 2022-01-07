import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

function Single({ posts, setPosts, currentUser }) {
  console.log(posts);

  return (
    <div className="flex">
      <SinglePost posts={posts} setPosts={setPosts} currentUser={currentUser} />
      <Sidebar />
    </div>
  );
}

export default Single;
