import { useState } from "react";
import "./SidebarLayout.css";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiChevronLeft, FiChevronDown, FiChevronUp, FiSettings } from "react-icons/fi";
import clsx from "clsx";

const SidebarLayout = ({ menuGroups, footerItems, logo, appName = "Chopin" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setActiveGroupId(null);
      setIsSettingsOpen(false);
    }
  };

  const handleGroupClick = (id) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setActiveGroupId(id);
    } else {
      setActiveGroupId(activeGroupId === id ? null : id);
    }
  };

  const toggleSettings = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setIsSettingsOpen(true);
    } else {
      setIsSettingsOpen(!isSettingsOpen);
    }
  };

  return (
    <aside className={clsx("sb-sidebar", isCollapsed && "sb-collapsed")}>

      <div className="sb-header">
        <div className="sb-brand">
          <div className="sb-logo-icon">{logo}</div>
          {!isCollapsed && <span className="sb-app-name">{appName}</span>}
        </div>
        <button className="sb-toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <nav className="sb-nav-content">
        {menuGroups.map((group) => {
          const isOpen = activeGroupId === group.id;
          const isRouteActive = group.subItems?.some((sub) => sub.path === location.pathname);

          return (
            <div key={group.id} className={clsx("sb-group", isOpen && "active")}>
              <button
                className={clsx("sb-menu-btn", isRouteActive && "route-active")}
                onClick={() => handleGroupClick(group.id)}
                title={isCollapsed ? group.label : ""}
              >
                <span className="sb-icon">{group.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="sb-label">{group.label}</span>
                    <span className="sb-arrow">
                      <FiChevronDown className={clsx("arrow-icon", isOpen && "rotate")} />
                    </span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {isOpen && !isCollapsed && group.subItems && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="sb-submenu-wrapper"
                  >
                    <ul className="sb-submenu">
                      {group.subItems.map((sub, idx) => (
                        <li key={idx}>
                          <Link to={sub.path} className={clsx("sb-sub-link", location.pathname === sub.path && "active-link")}>
                            {sub.label}
                            {sub.badge && <span className="sb-badge">{sub.badge}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>


      <div className="sb-footer">
        <AnimatePresence>
          {isSettingsOpen && !isCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95, y: 10 }}
              animate={{ height: "auto", opacity: 1, scale: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="sb-footer-menu-wrapper"
            >
              <div className="sb-footer-menu-content">
                {footerItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={clsx("sb-footer-sub-link", item.isDanger && "danger")}
                  >
                    <span className="sb-sub-icon">{item.icon}</span>
                    <span className="sb-sub-label">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className={clsx("sb-footer-toggle", isSettingsOpen && "active")}
          onClick={toggleSettings}
          title={isCollapsed ? "Settings" : ""}
        >
          <span className="sb-icon"><FiSettings /></span>
          {!isCollapsed && (
            <>
              <span className="sb-label">Settings</span>
              <span className="sb-arrow">
                <FiChevronUp className={clsx("arrow-icon", isSettingsOpen && "rotate")} />
              </span>
            </>
          )}
        </button>
      </div>

    </aside>
  );
};

export default SidebarLayout