import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { useState } from "react";
import allPosts from "./datas/posts";
import TopBar1 from "./components/TopBar1";
import allUsers from "./datas/allUsers";

function App() {
  const [posts, setPosts] = useState([...allPosts]);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([...allUsers]);



  return (
    <Router>
      <TopBar1 currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route path="/posts" element={<Home posts={posts} />} />
        <Route path="/register" element={currentUser.active ? (<Home posts={posts} />) : (<Register users={users} setUsers={setUsers} 
               setCurrentUser={setCurrentUser} />)} />
        <Route path="/login" element={currentUser.active ? (<Navigate to="/" />) : (<Login users={users} setCurrentUser={setCurrentUser} />)} />
        <Route path="/post/:id" element={<Single currentUser={currentUser} posts={posts} setPosts={setPosts} />} />
        <Route path="/write" element={currentUser.admin ? (<Write posts={posts} setPosts={setPosts} />) : (<Login users={users} 
               setCurrentUser={setCurrentUser} />)} />
        <Route path="/settings" element={currentUser.active ? (<Settings currentUser={currentUser} setCurrentUser={setCurrentUser}
               users={users} setUsers={setUsers} />) : (<Login users={users} setCurrentUser={setCurrentUser} />)}/>
      </Routes>
    </Router>
  );
}

export default App;
