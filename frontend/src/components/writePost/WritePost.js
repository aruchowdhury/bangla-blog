import "./writePost.css";

import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function WritePost() {
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      description,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.postImage = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        setError(true);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="writePost">
      {file && (
        <img
          className="writePostImg"
          src={URL.createObjectURL(file)}
          alt="PostImage"
        />
      )}
      <form className="writePostForm" onSubmit={handleSubmit}>
        <div className="writePostFormGroup">
          <label htmlFor="fileInput">
            <i className="writePostIcon fas fa-plus-circle"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="textInput"
            type="text"
            placeholder="শিরোনাম"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writePostFormGroup">
          <textarea
            className="textInput writeText"
            type="text"
            placeholder="ব্লগ লিখুন..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
      {error && (
        <span style={{ color: "#d66d6b", marginTop: "10px" }}>
          Something went wrong! Please Refresh the page.
        </span>
      )}
    </div>
  );
}
