import ProfileSettings from "../../components/profileSettings/ProfileSettings";
import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <ProfileSettings />
      <SideBar />
    </div>
  );
}
