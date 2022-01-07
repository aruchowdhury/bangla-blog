import "./post.css";

import { Link } from "react-router-dom";

export default function Post({ post }) {
  const publicFolder = "http://localhost:8000/images/";
  return (
    <div className="post">
      {post.postImage && (
        <img
          className="postImg"
          src={publicFolder + post.postImage}
          alt="PostImage"
        />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category) => {
            <span className="postCategory">{category.name}</span>;
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}
