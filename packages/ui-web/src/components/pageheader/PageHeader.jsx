import React from 'react';
import './PageHeader.css'

const PageHeader = ({ title, subtitle, stats = [] }) => {
  return (
    <header className="tp-header">
      <div className="tp-header-content">
        <h1 className="tp-title">{title}</h1>
        {subtitle && <span className="tp-subtitle">{subtitle}</span>}
      </div>

      {stats.length > 0 && (
        <div className="tp-header-stats">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <span className={`tp-stat ${stat.className || ''}`}>
                {stat.label}: {stat.value}
              </span>

              {index < stats.length - 1 && (
                <span className="tp-stat-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
};

export default PageHeader;