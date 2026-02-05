import './TopbarLayout.css';

const TopbarLayout = ({ leftSlot, rightSlot }) => {
  return (
    <div className="topbar-layout-container">
      <div className="layout-section-left">
        {leftSlot}
      </div>
      <div className="layout-section-right">
        {rightSlot}
      </div>
    </div>
  );
};

export default TopbarLayout;