import "./writeBlog.css";
import SideBar from "../../components/sidebar/SideBar";
import WritePost from "../../components/writePost/WritePost";

export default function WriteBlog() {
  return (
    <div className="writeBlog">
      <WritePost />
      <SideBar />
    </div>
  );
}
