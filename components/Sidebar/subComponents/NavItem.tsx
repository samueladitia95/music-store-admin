import Link from "next/link";
import { NavItemType } from "../type";

const NavItem = ({ navigation }: { navigation: NavItemType }) => {
  const { category, readLink, logo } = navigation;
  return (
    <span className="font-medium cursor-pointer">
      <span className="flex justify-between p-1 hover:bg-gray-200 rounded">
        <Link href={readLink}>
          <span className="flex space-x-2 items-center">
            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={logo} />
            </svg>
            {/* Category Header */}
            <p>{category}</p>
          </span>
        </Link>
      </span>
    </span>
  );
};

export default NavItem;
