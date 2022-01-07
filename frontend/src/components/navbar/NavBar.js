import "./navbar.css";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:8000/images/";

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <i className="nav-left-icon ">
          <Link className="link" to="/">
            শঙ্খচিল
          </Link>
        </i>
      </div>
      <div className="nav-center">
        <ul className="list">
          <li className="list-item">
            <Link className="link" to="/">
              নীড়পাতা
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/write">
              ব্লগ লিখুন
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/about">
              নীতিমালা
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <ul className="list">
              <li className="list-item" onClick={handleLogout}>
                লগ আউট
              </li>
            </ul>
            {user.profilePicture ? (
              <Link className="link" to="/settings">
                <img
                  className="nav-right-img"
                  src={publicFolder + user.profilePicture}
                  alt="profilePicture"
                />
              </Link>
            ) : (
              <Link className="link" to="/settings">
                <img
                  className="nav-right-img"
                  src="http://localhost:8000/images/hello.png"
                  alt="profilePicture"
                />
              </Link>
            )}
          </>
        ) : (
          <ul className="list">
            <li className="list-item-right">
              <Link className="link" to="/register">
                রেজিস্টার
              </Link>
            </li>
            <li className="list-item-right">
              <Link className="link" to="/login" onClick={handleLogout}>
                লগইন
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
