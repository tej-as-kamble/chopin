import './Topbar.css';
import { TopbarLayout } from "@chopin/ui-web";
import { TOPBAR_CONFIG } from '@/config/TopbarConfig';


const Topbar = ({ pageTitle = 'Dashboard' }) => {
  const config = TOPBAR_CONFIG;

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <a key={index} href={item.route} className={`nav-item ${item.className}`}>
        {item.icon}
        <span className="nav-label">{item.label}</span>
      </a>
    ));
  };

  const LeftContent = (
    <>
      <h1 className="topbar-title">{pageTitle}</h1>
      <div className="divider"></div>
      {config.leftActions.length > 0 && renderNavItems(config.leftActions)}
    </>
  );

  const RightContent = (
    <>
      {config.rightActions.length > 0 && renderNavItems(config.rightActions)}
    </>
  );

  return (
    <TopbarLayout
      leftSlot={LeftContent}
      rightSlot={RightContent}
    />
  );
};

export default Topbar;