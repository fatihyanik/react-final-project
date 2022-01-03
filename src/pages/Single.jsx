import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

function Single() {
  return (
    <div className="flex">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
