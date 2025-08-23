import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useContext } from "react";
import { MyContext } from "../../App/App";

const Header = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <>
      <div className={style.Header}>
        <div className={style.Navbar}>
          <NavLink
            to={"/"}
            className={(e) =>
              e.isActive
                ? style.Navbar_Items_Active
                : style.Navbar_Items_NotActive
            }
          >
            Task List
          </NavLink>
          <NavLink
            to={"/TaskForm"}
            className={(e) =>
              e.isActive
                ? style.Navbar_Items_Active
                : style.Navbar_Items_NotActive
            }
          >
            Task Form
          </NavLink>
        </div>
        <div className={style.User}>
          <Link
            className={style.UserText}
            onClick={() => {
              setUser("Login");
            }}
            to={"/login"}
          >
            {user?user:"Login"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
