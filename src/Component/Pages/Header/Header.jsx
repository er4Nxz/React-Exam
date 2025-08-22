import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
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
          <h1>Sina</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
