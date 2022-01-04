import "./home.css";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/allPosts/Posts";
import SideBar from "../../components/sidebar/SideBar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
