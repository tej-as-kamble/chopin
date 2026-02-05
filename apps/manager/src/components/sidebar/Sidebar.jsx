import "./Sidebar.css"
import { SidebarLayout } from "@chopin/ui-web";
import { MANAGER_MENU, MANAGER_FOOTER } from "@/config/DashboardMenuConfig";
import { FiCommand } from "react-icons/fi";

const Sidebar = () => {
    return (
        <SidebarLayout
            appName="ManagerPanel"
            logo={<FiCommand />}
            menuGroups={MANAGER_MENU}
            footerItems={MANAGER_FOOTER}
        />
    )
}

export default Sidebar;
