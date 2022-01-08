import "./mobileNav.css";

import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function MobileNav({ isOpen, handleNavClick }) {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:8000/images/";

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <MobileNavContainer isOpen={isOpen} onClick={handleNavClick}>
      <ul className="ul-close" onClick={handleNavClick}>
        <i class="fas fa-times"></i>
      </ul>
      {user && (
        <ul className="ul-list">
          {user.profilePicture ? (
            <Link className="link" to="/settings" onClick={handleNavClick}>
              <img
                className="profileImg"
                src={publicFolder + user.profilePicture}
                alt="profilePicture"
              />
            </Link>
          ) : (
            <Link className="link" to="/settings" onClick={handleNavClick}>
              <img
                className="profileImg"
                src="http://localhost:8000/images/hello.png"
                alt="profilePicture"
              />
            </Link>
          )}
        </ul>
      )}
      <ul className="ul-list">
        <li className="list">
          <Link className="link" to="/" onClick={handleNavClick}>
            নীড়পাতা
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/write" onClick={handleNavClick}>
            ব্লগ লিখুন
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/about" onClick={handleNavClick}>
            নীতিমালা
          </Link>
        </li>
      </ul>

      {user ? (
        <ul className="ul-list">
          <li className="list" onClick={handleLogout}>
            লগ আউট
          </li>
        </ul>
      ) : (
        <ul className="ul-list">
          <li className="list">
            <Link className="link" to="/register" onClick={handleNavClick}>
              রেজিস্টার
            </Link>
          </li>
          <li className="list">
            <Link
              className="link"
              to="/login"
              onClick={handleLogout && handleNavClick}
            >
              লগইন
            </Link>
          </li>
        </ul>
      )}
    </MobileNavContainer>
  );
}

const MobileNavContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  font-family: "Noto Serif Bengali", serif;
  background-color: rgb(250, 248, 248, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
