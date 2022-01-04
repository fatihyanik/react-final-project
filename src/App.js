import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import allPosts from "./datas/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  async function getPosts() {
    setPosts(allPosts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <Router>
        <TopBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
          <Route path="/posts" element={<Home posts={posts} />} />
          <Route path="/register" element={currentUser.active ? <Home posts={posts} /> : <Register />} />
          <Route path="/login" element={currentUser.active ? <Home posts={posts} /> : <Login setCurrentUser={setCurrentUser} />} />
          <Route path="/post/:id" element={<Single posts={posts} />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;