import type { NextPage } from "next";
import Link from "next/link";
import { useGlobalContext } from "../../context";

const Sidebar: NextPage = () => {
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
            <span className="font-medium">
              <span
                v-if="navigation.link"
                className="flex justify-between p-1 hover:bg-gray-200 rounded"
              >
                <Link href="www.google.com">
                  <span className="flex space-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                    <p>Home</p>
                  </span>
                </Link>
              </span>
            </span>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
