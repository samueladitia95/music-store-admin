import type { NextPage } from "next";
import Image from "next/image";
import { useGlobalContext } from "../../context";

const Navbar: NextPage = () => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <nav className="sticky top-0 bg-gray border-b-2">
      <div className="px-6 py-2 mx-auto flex justify-between">
        <div className="flex content-center items-center">
          {/* Menu Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <p className="text-2xl font-medium">Music Store</p>
          </div>
        </div>

        <div className="px-1">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
