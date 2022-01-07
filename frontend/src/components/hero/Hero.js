import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroTitles">
        <span className="heroTitleLarge">কবি ও কবিতার কথা</span>
        <span className="heroTitle1">রয়েছি সবুজ মাঠে-ঘাসে-</span>
        <span className="heroTitle2">
          আকাশে ছড়ায়ে আছে নীল হ'য়ে আকাশে-আকাশে;
        </span>

        <div className="searchBox">
          <form classname="searchForm" method="post">
            <input
              className="searchInput"
              type="text"
              name="header_search_query"
              placeholder="খোঁজ....."
            />
            <button
              className="searchBtn"
              type="submit"
              name="header_search_submit"
            >
              <i className="search-icon fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <img
        className="heroImage"
        src="https://images.pexels.com/photos/9962859/pexels-photo-9962859.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="Hero"
      />
    </div>
  );
}
