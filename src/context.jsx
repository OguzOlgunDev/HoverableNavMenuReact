import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpe] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpe(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpe(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, setPageId, pageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
