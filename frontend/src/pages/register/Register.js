import "./register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("./auth/register", {
        username,
        email,
        password,
      });
      setSuccess(res.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">নিবন্ধন পাতা</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>আপনার নামঃ</label>
        <input
          type="text"
          placeholder="নাম টাইপ করুন..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>ইমেইলঃ</label>
        <input
          type="email"
          placeholder="ইমেইল টাইপ করুন..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>পাসওয়ার্ডঃ</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="registerButton" type="submit">
          নিবন্ধন করুন
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          আগে নিবন্ধিত হয়ে থাকে লগইন করুন।
        </Link>
      </button>
      {error && (
        <span style={{ color: "#d66d6b", marginTop: "10px" }}>
          Something went wrong! Please Refresh the page.
        </span>
      )}
      {success && (
        <span style={{ color: "#d66d6b", marginTop: "10px" }}>
          Registration successful. Please login to continue.
        </span>
      )}
    </div>
  );
}
