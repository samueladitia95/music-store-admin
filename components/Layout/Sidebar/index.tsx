import { useGlobalContext } from "../../../context";
import NavItem from "./subComponents/NavItem";
import { NavItemType, SocialMediaType } from "./type";
import { useRouter } from "next/router";

//! Variable normal aja, karena tidak butuh reaktive
//! Biar gampang aja
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
    createLink: "/products/add",
    logo: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    category: "Users",
    readLink: "/users",
    logo: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    category: "Login",
    readLink: "/login",
    logo: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
];

const socialMedias: SocialMediaType[] = [
  {
    logo: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    link: "",
  },
  {
    logo: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
    link: "",
  },
  {
    logo: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    link: "",
  },
];

const sidebarWidth = `w-64`;

const Sidebar = () => {
  const { state, dispatch } = useGlobalContext();
  const { isSidebarOpen } = state;
  const { pathname } = useRouter();

  const toggleSidebar = (): void => dispatch({ type: "TOGGLE_SIDEBAR" });

  return (
    <div>
      {/* Black div to block the rest of the page when opening sidebar */}
      <div
        className={`bg-black opacity-40 fixed h-full w-screen top-0 left-0 md:hidden z-10 ${
          !isSidebarOpen ? "hidden" : ""
        }`}
        onClick={() => toggleSidebar()}
      ></div>

      <div
        className={`h-screen ${sidebarWidth} z-40 overflow-y-auto transform transition duration-200 ease-in-out fixed top-0 md:static md:transform-none ${
          !isSidebarOpen ? "-translate-x-full" : ""
        } `}
      >
        <div
          className={`${sidebarWidth} bg-bLightSecondary dark:bg-bDarkSecondary dark:text-tDarkPrimary flex flex-col min-h-screen p-4 md:fixed md:top-0 md:left-0`}
        >
          {/* Header  */}
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              {/* Logo Title */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-accent1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
              <span className="text-2xl font-medium">Music Store</span>
            </div>

            {/* Close Button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => toggleSidebar()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Navigation + Footer */}
          <div className="flex flex-col flex-1 space-y-4 justify-around">
            {/* Navigation */}
            <div className="flex-1 flex flex-col space-y-2 pt-4">
              {/* Navigation Item */}
              {navigations.map((element: NavItemType, i: number) => (
                <NavItem
                  navigation={element}
                  key={i}
                  isActive={element.readLink === pathname}
                />
              ))}
            </div>

            <hr className="border-1 border-current border-opacity-95" />

            {/* Footer */}
            <div className="flex flex-col space-y-2">
              <p className="mb-1">Powered by :</p>
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  <p>Samuel</p>
                </div>
              </div>

              {/* Social Media Link */}
              <div className="flex space-x-3 pt-2">
                {socialMedias.map(({ logo }: SocialMediaType, i: number) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      key={i}
                    >
                      <path d={logo} />
                    </svg>
                  );
                })}
              </div>
              <p className="text-xs">© Samuel 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
