import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className=""
          src="https://images.pexels.com/photos/4065890/pexels-photo-4065890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
          alt="SidebarImage"
        />
        <p className="">
          গাছে ছিল দুটি পাখি রঙ তাদের সাদা। আমি আর তুমি এক অদৃশ্য মায়ায় বাধা।।
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">প্রেম</li>
            <li className="sidebarListItem">প্রকৃতি</li>
            <li className="sidebarListItem">পূজা</li>
            <li className="sidebarListItem">বোধি</li>
            <li className="sidebarListItem">গল্প</li>
            <li className="sidebarListItem">প্রজ্ঞা</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Social Media</span>
          <div className="sidebarSocialIcon">
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
