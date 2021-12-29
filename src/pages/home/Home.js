import "./home.css";
import Hero from "../../hero/Hero";
import AllPosts from "../../posts/AllPosts";
import SideBar from "../../sidebar/SideBar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home">
        <AllPosts />
        <SideBar />
      </div>
    </>
  );
}
