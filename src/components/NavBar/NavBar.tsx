import style from "./NavBar.module.scss";
import "./navbar.scss";

interface NavBarProps {
  toggleCheckboxMod: () => void;
  checked: boolean;
  showAlert: (message: string, type: string) => void;
  mode: string;
}

function NavBar({ toggleCheckboxMod, checked, mode }: NavBarProps) {
  const navClass = mode === "dark" ? "bg-dark" : "bg-light";

  return (
    <nav className={`navbar navbar-expand-lg mb-2 ${navClass}`}>
      <div className="container-fluid d-flex align-items-center">
        <a className={`navbar-brand text-${navClass} fs-2`} href="#">
          TextConverter
        </a>
        <div className="d-flex align-items-center justify-content-between flex-grow-1">
          <a
            className={`nav-link text-${navClass} active d-flex`}
            aria-current="page"
            href="#"
          >
            Home
          </a>
          <label className={style.switch}>
            <input
              onChange={toggleCheckboxMod}
              type="checkbox"
              name="theme_switch"
              checked={checked}
            />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
