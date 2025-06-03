import { useGlobalContext } from "../context";
import { useRef } from "react";
import sublinks from "../data";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenuEl = submenuContainer.current;
    const { left, right, bottom } = submenuEl.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  const currentPage = sublinks.find((page) => page.pageId === pageId);
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { icon, id, label, url } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
