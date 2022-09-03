import Image from "next/image";
import { useGlobalContext } from "../../../context";

type Option = {
  icon: string;
  prompt: string;
  handler?: () => void;
};

export default function UserOption({
  toggleUserOption,
  isOpen,
}: {
  toggleUserOption: () => void;
  isOpen: boolean;
}) {
  const { state, dispatch } = useGlobalContext();

  const toggleDarkMode = () => {
    const { isDarkMode } = state;
    if (!isDarkMode) {
      localStorage.setItem("isDarkMode", "on");
    } else {
      localStorage.removeItem("isDarkMode");
    }
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  // Pilihan Options di dropdown
  const options: Option[] = [
    {
      icon: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
      prompt: "My Profile",
    },
    {
      icon: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z",
      prompt: "Toggle Dark Mode",
      handler: toggleDarkMode,
    },
    {
      icon: "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z",
      prompt: "Sign Out",
    },
  ];

  return (
    <div className={`${isOpen ? "visible" : "invisible"}`}>
      <div
        className="bg-black opacity-40 fixed h-full w-screen top-0 left-0"
        onClick={() => {
          toggleUserOption();
        }}
      ></div>
      <div className="z-50 fixed top-14 right-8 bg-bLightPrimary dark:bg-bDarkPrimary rounded p-4">
        <div className="flex justify-center flex-col gap-3">
          <div className="text-center">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <p className="font-medium text-xl text-center">Administrator</p>
          <hr className="border-1 border-tLightPrimary dark:border-tDarkPrimary" />

          {/* List of options button */}
          {options.map((el: Option) => (
            <button
              key={el.prompt}
              className="flex gap-3 p-2 hover:bg-bLightSecondary dark:hover:bg-bDarkSecondary"
              onClick={() => {
                el.handler ? el.handler() : null;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d={el.icon} />
              </svg>
              <p>{el.prompt}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
