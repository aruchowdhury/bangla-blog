import "./singleBlog.css";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function SingleBlog() {
  return (
    <div className="singleBlog">
      <SinglePost />
      <SideBar />
    </div>
  );
}
