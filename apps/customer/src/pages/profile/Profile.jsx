import { useState } from "react";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileContent from "@/components/profile/ProfileContent";
import "@/components/profile/Profile.css";

const Profile = () => {
  const [active, setActive] = useState("personal");

  return (
    <div className="profile-page">
      <ProfileSidebar active={active} setActive={setActive} />
      <ProfileContent active={active} />
    </div>
  );
};

export default Profile;
