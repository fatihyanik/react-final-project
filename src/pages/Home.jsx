import Header from "../components/Header";
import Posts from "../components/Posts";

function Home({ posts }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Posts posts={posts} />
      
      </div>

    </div>
  );
}

export default Home;
