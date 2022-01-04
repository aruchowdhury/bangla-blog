import "./writePost.css";

export default function WritePost() {
  return (
    <div className="writePost">
      <img
        className="writePostImg"
        src="https://images.pexels.com/photos/10596304/pexels-photo-10596304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="PostImage"
      />
      <form className="writePostForm">
        <div className="writePostFormGroup">
          <label htmlFor="fileInput">
            <i className="writePostIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="textInput"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writePostFormGroup">
          <textarea
            className="textInput writeText"
            type="text"
            placeholder="Tell Your Story..."
          ></textarea>
        </div>
        <button className="submit">Publish</button>
      </form>
    </div>
  );
}
