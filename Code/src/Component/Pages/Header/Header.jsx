import {  NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  const UserName = localStorage.getItem("UserName");
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 py-3 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 md:mb-0">
            <NavLink
              to={"/"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                `text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-white border-b-2 border-blue-500 pb-1"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Task List
            </NavLink>
            <NavLink
              to={"/TaskForm"}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                `text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-white border-b-2 border-green-500 pb-1"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Task Form
            </NavLink>
          </div>
          <div className="flex items-center">
            <button
              className="text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
              onClick={() => {
                navigate("/login")
                localStorage.removeItem("UserName");
                location.reload();
              }}
              style={{ textDecoration: "none" }}
            >
              {UserName || "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
