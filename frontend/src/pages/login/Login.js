import "./login.css";

import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext, useRef } from "react";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">লগইন পাতা</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>আপনার নামঃ</label>
        <input ref={userRef} type="text" placeholder="নাম টাইপ করুন... " />
        <label>পাসওয়ার্ডঃ</label>
        <input ref={passwordRef} type="password" />
        <button className="loginButton" type="submit" disabled={isFetching}>
          লগইন করুন
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          আমাদের এখানে একাউন্ট না থাকলে নিবন্ধন করুন।
        </Link>
      </button>
    </div>
  );
}
