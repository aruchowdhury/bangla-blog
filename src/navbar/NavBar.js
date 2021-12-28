import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <i className="nav-left-icon fab fa-facebook-square"></i>
        <i className="nav-left-icon fab fa-instagram-square"></i>
        <i className="nav-left-icon fab fa-twitter-square"></i>
      </div>
      <div className="nav-center">
        <ul className="center-list">
          <li className="center-list-item">নীড়পাতা</li>
          <li className="center-list-item">আমাদের পরিচয় </li>
          <li className="center-list-item">যোগাযোগ</li>
          <li className="center-list-item">ব্লগ লিখুন</li>
          <li className="center-list-item">লগ আউট</li>
        </ul>
      </div>
      <div className="nav-right">
        <img
          className="nav-right-img"
          src="https://images.pexels.com/photos/9737456/pexels-photo-9737456.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="profilePicture"
        />
        <i className=" nav-search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
