import "./singlePost.css";

import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const { user } = useContext(Context);
  const [singlePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + path);
      setSinglePost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    fetchPost();
  }, [path]);

  const publicFolder = "http://localhost:8000/images/";

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${singlePost._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${singlePost._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdate(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.postImage && (
          <img
            className="singlePostImg"
            src={publicFolder + singlePost.postImage}
            alt="PostImage"
          />
        )}
        {update ? (
          <input
            className="textInput"
            type="text"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {singlePost.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className=" singlePostIcon far fa-edit"
                  onClick={() => setUpdate(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link className="link" to={`/?user=${singlePost.username}`}>
              <b className="singlePostAuthor">{singlePost.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="textInput writeText"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{description}</p>
        )}
        {update && (
          <button className="updateSubmit" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
      {error && (
        <span style={{ color: "#d66d6b", marginTop: "10px" }}>
          Something went wrong! Please Refresh the page.
        </span>
      )}
    </div>
  );
}
