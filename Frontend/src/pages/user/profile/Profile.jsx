import { useState } from "react";
import ProfileSidebar from "@/components/user/profile/ProfileSidebar";
import ProfileContent from "@/components/user/profile/ProfileContent";
import "@/components/user/profile/Profile.css";

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
