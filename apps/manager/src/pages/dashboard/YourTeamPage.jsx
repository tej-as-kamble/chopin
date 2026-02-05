import './YourTeamPage.css';
import { RiTeamLine } from 'react-icons/ri';

const YourTeamPage = () => {
  return (
    <div className="team-page-container">
      <div className="team-empty-state-card">
        <div className="icon-wrapper">
          <RiTeamLine className="team-icon" />
        </div>

        <h2 className="team-headline">This feature will available soon in your area..</h2>

        <p className="team-subtext">
          Team management features, including restaurants and delivery partners,
          will be available soon in your area if needed.
        </p>

        <p className="team-subtext-secondary">
          Once active, this section will provide full visibility into your
          area-mapped teams and workforce operations.
        </p>
      </div>
    </div>
  );
};

export default YourTeamPage;