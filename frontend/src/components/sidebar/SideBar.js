import "./sidebar.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategory();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h1>সম্পাদকীয়</h1>
        <p className="">
          গাছে ছিল দুটি পাখি রঙ তাদের সাদা। আমি আর তুমি এক অদৃশ্য মায়ায় বাধা।।
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">বিভাগ</span>
          <ul className="sidebarList">
            {categories.map((category) => (
              <Link className="link" to={`/?category=${category.name}`}>
                <li className="sidebarListItem">{category.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">সামাজিক যোগাযোগ</span>
          <div className="sidebarSocialIcon">
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
