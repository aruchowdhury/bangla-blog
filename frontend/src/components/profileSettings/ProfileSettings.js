import "./profileSettings.css";

export default function ProfileSettings() {
  return (
    <div className="profileSettings">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Account</span>
        <span className="settingsTitleDelete">Delete Account</span>
      </div>
      <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="profilePictureSettings">
          <img
            className="profileImg"
            src="https://images.pexels.com/photos/10596304/pexels-photo-10596304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="PostImage"
          />
          <label htmlFor="fileInput">
            <i className="profilePictureIconSettings far fa-user-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
        <label>User Name:</label>
        <input type="text" placeholder="New user name" />
        <label>Email:</label>
        <input type="email" placeholder="newemail@email.com" />
        <label>Password:</label>
        <input type="password" placeholder="........" />
        <button className="settingsSubmitButton">Update</button>
      </form>
    </div>
  );
}
