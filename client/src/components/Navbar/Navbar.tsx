import { Link } from "react-router-dom";
import "./Navbar.css";
//import { Logo } from "../../assets/index";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md bg-none navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Moose
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/create-post"}>
                <button className="Button Button-primary">
                  <div className="Button-cube">
                    <span>create</span>
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
