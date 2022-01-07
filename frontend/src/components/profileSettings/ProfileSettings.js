import "./profileSettings.css";

import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function ProfileSettings() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:8000/images/";

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        setError(true);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="profileSettings">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Account</span>
        <span className="settingsTitleDelete">Delete Account</span>
      </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
        <div className="profilePictureSettings">
          <img
            className="profileImg"
            src={
              file
                ? URL.createObjectURL(file)
                : publicFolder + user.profilePicture
            }
            alt="PostImage"
          />
          <label htmlFor="fileInput">
            <i className="profilePictureIconSettings far fa-user-circle"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <label>User Name:</label>
        <input
          type="text"
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="settingsSubmitButton" type="submit">
          Update
        </button>
        {success && (
          <span
            style={{ color: "#a1504f", textAlign: "center", marginTop: "20px" }}
          >
            Profile has been updated.
          </span>
        )}
        {error && (
          <span
            style={{ color: "red", textAlign: "center", marginTop: "20px" }}
          >
            There is an error on the page. Please refresh.
          </span>
        )}
      </form>
    </div>
  );
}
