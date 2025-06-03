import { FaTimes } from "react-icons/fa";

import sublinks from "../data";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { pageId, links, page } = item;
            return (
              <article key={pageId}>
                <h4>page</h4>
                <ul className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
