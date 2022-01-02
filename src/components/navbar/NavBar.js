import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = true;
  return (
    <div className="nav">
      <div className="nav-left">
        <i className="nav-left-icon ">
          <Link className="link" to="/">
            শঙ্খচিল
          </Link>
        </i>
      </div>
      <div className="nav-center">
        <ul className="center-list">
          <li className="center-list-item">
            <Link className="link" to="/">
              নীড়পাতা
            </Link>
          </li>
          <li className="center-list-item">
            <Link className="link" to="/write">
              ব্লগ লিখুন
            </Link>
          </li>
          <li className="center-list-item">
            <Link className="link" to="/">
              যোগাযোগ
            </Link>
          </li>
          {user ? (
            <li className="center-list-item">
              <Link className="link" to="/login">
                লগ আউট
              </Link>
            </li>
          ) : (
            <>
              <li className="center-list-item">
                <Link className="link" to="/register">
                  রেজিস্টার
                </Link>
              </li>
              <li className="center-list-item">
                <Link className="link" to="/login">
                  লগইন
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="nav-right">
        <div className="navSearchBox">
          <form classname="navSearchForm" method="post">
            <input
              className="navSearchInput"
              id="header_search_query"
              type="search"
              name="header_search_query"
              value=""
              placeholder="খোঁজ....."
            />
            <button
              className="navSearchBtn"
              type="submit"
              name="header_search_submit"
            >
              <i className=" nav-search-icon fas fa-search"></i>
            </button>
          </form>
        </div>

        {user && (
          <img
            className="nav-right-img"
            src="https://images.pexels.com/photos/9737456/pexels-photo-9737456.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="profilePicture"
          />
        )}
      </div>
    </div>
  );
}
