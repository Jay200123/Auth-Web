import { useNavigate } from "react-router-dom";
import { useStore } from "../../state/store";

export default function Navbar() {
  const navigate = useNavigate();
  const { auth, isAuthenticated, logout } = useStore();

  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  return (
    <>
      <nav className="w-full lg:h-16 md:h-14 h-12 flex items-center justify-between overflow-hidden border border-gray-400 p-2 shadow-md">
        <div className="p-2">
          <h3
            onClick={handleHome}
            className="lg:text- lg:font-bold font-medium md:text-base text-sm"
          >
            Auth Web
          </h3>
        </div>
        <div className="lg:block md:block hidden">
          <input type="text" className="border border-black rounded-md p-1" />
        </div>
        <div className="">
          {auth && isAuthenticated ? (
            <ul className="flex items-center gap-4">
              <li onClick={handleHome} className="font-medium cursor-pointer">
                Home
              </li>
              <li onClick={handleLogout} className="font-medium cursor-pointer">
                Logout
              </li>
            </ul>
          ) : (
            <ul className="flex items-center gap-4">
              <li onClick={handleLogin} className="font-medium cursor-pointer">
                Login
              </li>
              <li
                onClick={handleRegister}
                className="font-medium cursor-pointer"
              >
                Register
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
