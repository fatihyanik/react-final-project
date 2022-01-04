import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

function Single({ posts }) {
  console.log(posts);

  return (
    <div className="flex">
      <SinglePost posts={posts} />
      <Sidebar />
    </div>
  );
}

export default Single;
