import { useEffect } from "react";
import { useGlobalContext } from "../../context";

const Login = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  console.log(isDarkMode, "HALAMAN LOGIN");

  useEffect(() => {
    if (localStorage.getItem("isDarkMode")) {
      setIsDarkMode(true);
    }
  }, [setIsDarkMode]);

  return (
    <div className={`h-screen w-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-bDarkPrimary dark:text-tDarkPrimary">
        <div className="container py-10 max-w-xl h-screen flex flex-col space-y-44 items-stretch ">
          <div className="text-4xl font-bold text-center">
            <p>Welcome to Music Store</p>
            <p>Admin Panel</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Log In</p>
            <form className="pt-6 pb-8 mb-4">
              <div className="mb-4 text-gray-700 dark:text-tDarkPrimary">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  className="focus:outline-none border rounded w-full py-2 px-3 leading-tight mb-3 bg-bLightSecondary dark:bg-bDarkSecondary border-red-500"
                  type="email"
                  placeholder="Email"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a Email.
                </p>
              </div>
              <div className="mb-6 text-gray-700 dark:text-tDarkPrimary">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                  className="focus:outline-none border rounded w-full py-2 px-3 leading-tight mb-3 bg-bLightSecondary dark:bg-bDarkSecondary border-red-500"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-accent1 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
