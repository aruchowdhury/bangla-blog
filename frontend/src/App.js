import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import WriteBlog from "./pages/writeBlog/WriteBlog";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:postId" element={<SingleBlog />} />
        <Route path="write" element={user ? <WriteBlog /> : <Register />} />
        <Route path="settings" element={user ? <Settings /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
