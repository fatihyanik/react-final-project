import SinglePost from "../components/SinglePost";

function Single({ posts, setPosts, currentUser }) {
  console.log(posts);

  return (
    <div className="flex">
      <SinglePost posts={posts} setPosts={setPosts} currentUser={currentUser} />
    </div>
  );
}

export default Single;
