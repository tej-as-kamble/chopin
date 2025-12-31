import PersonalDetails from "./sections/PersonalDetails";
import SavedAddresses from "./sections/SavedAddresses";
import Payments from "./sections/Payments";
import Preferences from "./sections/Preferences";
import Security from "./sections/Security";
import Legal from "./sections/Legal";
import Logout from "./sections/Logout";
import DeleteAccount from "./sections/DeleteAccount";

const ProfileContent = ({ active }) => {
  return (
    <div className="profile-content">
      {active === "personal" && <PersonalDetails />}
      {active === "addresses" && <SavedAddresses />}
      {active === "payments" && <Payments />}
      {active === "preferences" && <Preferences />}
      {active === "security" && <Security />}
      {active === "legal" && <Legal />}
      {active === "logout" && <Logout />}
      {active === "delete" && <DeleteAccount />}
    </div>
  );
};

export default ProfileContent;
