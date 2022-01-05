import { Link } from "react-router-dom";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="flex flex-wrap m-5">
      {posts.map((post, index) => {
        return (
          <Link key={index} to={`/post/${post.id}`}>
            <Post key={index} post={post} />
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
