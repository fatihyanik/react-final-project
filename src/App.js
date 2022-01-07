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
import TopBar1 from "./components/TopBar1";
import allUsers from "./datas/allUsers";



function App() {

  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [users,setUsers] = useState([]);

  console.log(users);

  async function getPosts(){   

    setUsers(allUsers)
    setPosts(allPosts);

  }

  useEffect(()=>{
      getPosts();
  },[])



  
  return (
    <Router>
       <TopBar1 currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    {/*   <TopBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route path="/posts" element={<Home posts={posts} />} />
        <Route path="/register" element={currentUser.active ? <Home posts={posts} /> : <Register />} />
        <Route path="/login" element={currentUser.active ? <Home posts={posts} /> : <Login setCurrentUser={setCurrentUser} />} />
        <Route path="/post/:id" element={<Single currentUser={currentUser} posts={posts} setPosts={setPosts} />} />
        <Route path="/write" element={currentUser.admin ? <Write posts={posts} setPosts={setPosts} /> : <Login setCurrentUser={setCurrentUser}  />} />
        <Route path="/settings" element={currentUser.active ? <Settings currentUser={currentUser} users={users} setUsers={setUsers} /> : <Login setCurrentUser={setCurrentUser} />} />
      </Routes>
    </Router>
  );
}

export default App;