### It is a hoverable navbar menu including with sidebar for responsiv design


### I used useRef, useState, context api for accesing the global veriables for sidebar and navbar links. 



### components are : 
Navbar
Navbarlinks
Hero 
Sidebar
Submenu
Navbar links is inside the Navbar rest of them placing in the App component. 


### these are the global values 
const [isSidebarOpen, setIsSidebarOpe] = useState(false);
const [pageId, setPageId] = useState(null);

const openSidebar = () => {
    setIsSidebarOpe(true);
};
const closeSidebar = () => {
    setIsSidebarOpe(false);
};

### which you can access in any component whit using 
""
export const useGlobalContext = () => {
  return useContext(AppContext);
}; ""

### useGlobalContext 





