import { useGlobalContext } from "../../context";
import NavItem from "./subComponents/NavItem";
import { NavItemType } from "./type";

// Variable normal aja, karena tidak butuh responsive
const navigations: NavItemType[] = [
  {
    category: "Dashboard",
    readLink: "/",
    logo: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    category: "Orders",
    readLink: "/orders",
    logo: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    category: "Products",
    readLink: "/products",
    logo: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    category: "Users",
    readLink: "/users",
    logo: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
];

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <div
      className={`h-screen w-72 z-40 overflow-y-auto transform transition duration-200 ease-in-out fixed top-0 ${
        !isSidebarOpen ? "-translate-x-full" : ""
      }`}
    >
      <div className="bg-gray-400  flex flex-col min-h-screen w-72 p-4">
        {/* Header  */}
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            {/* Logo Title */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <span className="text-2xl font-medium">StoreCMS</span>
          </div>

          {/* Close Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 bg-red-200"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => setIsSidebarOpen(false)}
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        {/* Navigation + Footer */}
        <div className="flex flex-col flex-1 space-y-4 justify-around">
          {/* Navigation */}
          <div className="flex-1 flex flex-col space-y-2 pt-4">
            {/* Navigation Item */}
            {navigations.map((element: NavItemType, i: number) => (
              <NavItem navigation={element} key={i} />
            ))}
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
