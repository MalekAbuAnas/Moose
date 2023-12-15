import "./Home.css";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="container align-items-center justify-content-center text-center">
        <img src={Logo} alt="logo" className="the-logo" draggable="false" />
        <div className="text-container text-center align-items-center justify-content-center d-flex flex-column gap-3">
          <h1 className="home-title">Moose</h1>
          <p>Unleash Creativity beyond Boundaries with Moose</p>
          <Link to={"create-post"}>
            <button className="Button Button-primary">
              <div className="Button-cube">
                <span>Get Started</span>
                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
//<button className="Button-Black">Get Started</button>
