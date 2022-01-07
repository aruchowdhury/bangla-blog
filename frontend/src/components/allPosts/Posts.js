import "./posts.css";
import Post from "./Post";

export default function AllPosts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
